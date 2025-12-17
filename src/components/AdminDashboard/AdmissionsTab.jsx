export function AdmissionsTab({ admissions }) {
  // Group admissions by school/institution name
  const institutions = [
    // Known institutions that have admissions on the site
    "Lawson University",
    "Sunrise Theological School",
    "Deep Knowledge Academy",
    // You can add more institutions here if you add more admissions forms later
  ];

  const grouped = (admissions || []).reduce((acc, a) => {
    const key = a.school_name || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(a);
    return acc;
  }, {});

  // Ensure known institutions render even when there are no applications yet
  for (const name of institutions) {
    if (!grouped[name]) grouped[name] = [];
  }

  const allInstitutionNames = Array.from(
    new Set([...institutions, ...Object.keys(grouped)]),
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">School Admissions</h2>

      {/* Render a section per institution */}
      <div className="space-y-8">
        {allInstitutionNames.map((institutionName) => {
          const rows = grouped[institutionName] || [];
          return (
            <div
              key={institutionName}
              className="bg-white rounded-xl border border-[#E9E9E9] overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-[#FAFAFA] border-b border-[#E9E9E9]">
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {institutionName}
                  </h3>
                  <p className="text-sm text-[#6E6E6E]">
                    {rows.length} application{rows.length === 1 ? "" : "s"}
                  </p>
                </div>
                {rows.length > 0 ? (
                  <a
                    href={`data:text/csv;charset=utf-8,${encodeURIComponent(toCSV(rows))}`}
                    download={`${institutionName.replace(/\s+/g, "_").toLowerCase()}_admissions.csv`}
                    className="text-sm text-[#C29C1A] hover:underline"
                  >
                    Export CSV
                  </a>
                ) : null}
              </div>

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
                        Program
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                        Degree
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                        PDF
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9E9E9]">
                    {rows.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-6 py-6 text-sm text-center text-[#6E6E6E]"
                        >
                          No applications yet
                        </td>
                      </tr>
                    ) : (
                      rows.map((admission) => (
                        <tr key={admission.id} className="hover:bg-[#FAFAFA]">
                          <td className="px-6 py-4 text-sm text-black">
                            {admission.full_name}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                            {admission.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                            {admission.phone}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#2B2B2B]">
                            {admission.program || "-"}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#2B2B2B]">
                            {admission.degree_type || "-"}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {admission.qualifications_pdf_url ? (
                              <a
                                href={admission.qualifications_pdf_url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#C29C1A] hover:underline"
                              >
                                View PDF
                              </a>
                            ) : (
                              <span className="text-[#6E6E6E]">None</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#6E6E6E]">
                            {new Date(
                              admission.created_at,
                            ).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Helper: turn admissions into CSV text
function toCSV(rows) {
  const headers = [
    "id",
    "school_name",
    "full_name",
    "email",
    "phone",
    "program",
    "degree_type",
    "qualifications_pdf_url",
    "created_at",
  ];
  const csvRows = [headers.join(",")];
  for (const r of rows) {
    const vals = headers.map((h) => escapeCSV(r?.[h] ?? ""));
    csvRows.push(vals.join(","));
  }
  return csvRows.join("\n");
}

function escapeCSV(val) {
  const s = String(val);
  if (s.includes(",") || s.includes("\n") || s.includes('"')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}
