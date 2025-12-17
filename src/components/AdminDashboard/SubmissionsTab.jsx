export function SubmissionsTab({
  admissions,
  discipleshipRequests,
  departmentMembers,
  counselingBookings,
}) {
  const allSubmissions = [
    ...admissions.map((x) => ({
      id: `a-${x.id}`,
      type: "Admission",
      name: x.full_name,
      email: x.email,
      phone: x.phone,
      details: x.school_name,
      date: x.created_at,
    })),
    ...discipleshipRequests.map((x) => ({
      id: `d-${x.id}`,
      type: "Discipleship",
      name: x.full_name,
      email: x.email,
      phone: x.phone,
      details: "Request to be discipled",
      date: x.created_at,
    })),
    ...departmentMembers.map((x) => ({
      id: `m-${x.id}`,
      type: "Department",
      name: x.full_name,
      email: x.email,
      phone: x.phone,
      details: x.department,
      date: x.created_at,
    })),
    ...counselingBookings.map((x) => ({
      id: `c-${x.id}`,
      type: "Counseling",
      name: x.full_name,
      email: x.email,
      phone: x.phone,
      details:
        x.preferred_date || x.message?.slice(0, 40) || "Counseling booking",
      date: x.created_at,
    })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">All Submissions</h2>
      <div className="bg-white rounded-xl border border-[#E9E9E9] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FAFAFA] border-b border-[#E9E9E9]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                  Details
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E9E9]">
              {allSubmissions.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAFAFA]">
                  <td className="px-6 py-4 text-sm text-black">{row.type}</td>
                  <td className="px-6 py-4 text-sm text-black">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {row.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {row.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {row.details}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {new Date(row.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
