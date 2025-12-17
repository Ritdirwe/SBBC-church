import { hash } from "argon2";
import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

export async function POST(req) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { password } = await req.json();

    if (!password || password.length < 6) {
      return Response.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 },
      );
    }

    // Hash the password
    const hashedPassword = await hash(password);

    // Get user ID
    const [user] = await sql`
      SELECT id FROM auth_users WHERE email = ${session.user.email}
    `;

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // Check if credentials account exists
    const [existingAccount] = await sql`
      SELECT id FROM auth_accounts 
      WHERE "userId" = ${user.id} 
      AND type = 'credentials' 
      AND provider = 'credentials'
    `;

    if (existingAccount) {
      // Update existing credentials
      await sql`
        UPDATE auth_accounts 
        SET password = ${hashedPassword}
        WHERE id = ${existingAccount.id}
      `;
    } else {
      // Create new credentials account
      await sql`
        INSERT INTO auth_accounts ("userId", type, provider, "providerAccountId", password)
        VALUES (${user.id}, 'credentials', 'credentials', ${session.user.email}, ${hashedPassword})
      `;
    }

    return Response.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Password update error:", error);
    return Response.json(
      { error: "Failed to update password" },
      { status: 500 },
    );
  }
}
