import { hash } from "argon2";
import sql from "../../utils/sql.js";

export async function GET() {
  try {
    const email = "grappertechnologies@gmail.com";
    const password = "20000000";

    // Make hashing faster but still safe for this admin bootstrap
    // Defaults can be slow on cold starts; these values keep it responsive
    const hashedPassword = await hash(password, {
      timeCost: 2, // default ~3, lower time cost for speed
      memoryCost: 1024, // default ~4096, reduce memory to avoid slow cold starts
      parallelism: 1,
      hashLength: 32,
      type: 2, // argon2id
    });

    // Get user ID (create if missing)
    let user = (
      await sql`
      SELECT id FROM auth_users WHERE email = ${email}
    `
    )[0];

    if (!user) {
      // If the admin user doesn't exist yet, create it and grant admin
      const inserted = await sql`
        INSERT INTO auth_users (name, email, is_admin)
        VALUES ('SBBC Admin', ${email}, true)
        RETURNING id
      `;
      user = inserted && inserted[0];
    } else {
      // Ensure the user is an admin
      await sql`
        UPDATE auth_users 
        SET is_admin = true 
        WHERE id = ${user.id}
      `;
    }

    if (!user) {
      return Response.json(
        { error: "Could not create admin user" },
        { status: 500 },
      );
    }

    // Check if credentials account exists for this user
    const existingAccount = (
      await sql`
      SELECT id FROM auth_accounts 
      WHERE "userId" = ${user.id} 
      AND type = 'credentials' 
      AND provider = 'credentials'
    `
    )[0];

    if (existingAccount) {
      // Update existing credentials: set password AND correct providerAccountId to user.id
      await sql`
        UPDATE auth_accounts 
        SET password = ${hashedPassword}, "providerAccountId" = ${user.id}
        WHERE id = ${existingAccount.id}
      `;
      return Response.json({
        success: true,
        message: "Password updated and admin access granted!",
      });
    } else {
      // Create new credentials account with providerAccountId = user.id (required by auth adapter)
      await sql`
        INSERT INTO auth_accounts ("userId", type, provider, "providerAccountId", password)
        VALUES (${user.id}, 'credentials', 'credentials', ${user.id}, ${hashedPassword})
      `;
      return Response.json({
        success: true,
        message: "Password created and admin access granted!",
      });
    }
  } catch (error) {
    console.error("Password setup error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
