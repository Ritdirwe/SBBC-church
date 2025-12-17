export function DiscipleshipTab({ discipleshipRequests }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">
        Discipleship Requests
      </h2>
      <div className="bg-white rounded-xl border border-[#E9E9E9] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FAFAFA] border-b border-[#E9E9E9]">
              <tr>
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
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E9E9]">
              {discipleshipRequests?.map((request) => (
                <tr key={request.id} className="hover:bg-[#FAFAFA]">
                  <td className="px-6 py-4 text-sm text-black">
                    {request.full_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {request.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {request.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                    {new Date(request.created_at).toLocaleDateString()}
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
