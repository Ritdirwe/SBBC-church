"use client";
import {
  GraduationCap,
  Users,
  Mail,
  FileText,
  CheckCircle,
  Banknote,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export function OverviewTab({
  metrics,
  admissions,
  discipleshipRequests,
  departmentMembers,
}) {
  // --- Per-school metrics (Lawson University, Sunrise Theological School, Deep Knowledge Academy) ---
  // Fetch all students and all payments so we can compute school-level metrics reliably (names may vary slightly).
  const {
    data: allStudents = [],
    isLoading: studentsLoading,
    error: studentsError,
  } = useQuery({
    queryKey: ["students-all"],
    queryFn: async () => {
      const res = await fetch("/api/students");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/students, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const {
    data: allPayments = [],
    isLoading: paymentsLoading,
    error: paymentsError,
  } = useQuery({
    queryKey: ["student-payments-all"],
    queryFn: async () => {
      const res = await fetch("/api/student-payments");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/student-payments, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  // Helper to match school names robustly (handles minor naming differences like "Seminary")
  const normalize = (s) => String(s || "").toLowerCase();
  const matchers = [
    {
      key: "lawson",
      label: "Lawson University",
      match: (s) => normalize(s).includes("lawson"),
    },
    {
      key: "sunrise",
      label: "Sunrise Theological School",
      match: (s) => {
        const n = normalize(s);
        return n.includes("sunrise") || n.includes("seminary");
      },
    },
    {
      key: "dka",
      label: "Deep Knowledge Academy",
      match: (s) => normalize(s).includes("deep knowledge"),
    },
  ];

  // Build a studentId -> schoolKey map for payments grouping
  const studentSchoolMap = {};
  for (const st of allStudents) {
    const name = st?.school_name;
    let matchedKey = null;
    for (const m of matchers) {
      if (m.match(name)) {
        matchedKey = m.key;
        break;
      }
    }
    if (matchedKey) {
      studentSchoolMap[st.id] = matchedKey;
    }
  }

  // Pre-compute admissions per school
  const admissionsBySchool = {
    lawson: (admissions || []).filter((a) => matchers[0].match(a?.school_name)),
    sunrise: (admissions || []).filter((a) =>
      matchers[1].match(a?.school_name),
    ),
    dka: (admissions || []).filter((a) => matchers[2].match(a?.school_name)),
  };

  // Students per school
  const studentsBySchool = {
    lawson: (allStudents || []).filter((s) =>
      matchers[0].match(s?.school_name),
    ),
    sunrise: (allStudents || []).filter((s) =>
      matchers[1].match(s?.school_name),
    ),
    dka: (allStudents || []).filter((s) => matchers[2].match(s?.school_name)),
  };

  // Payments per school (confirmed + totals)
  const paymentsBySchool = { lawson: [], sunrise: [], dka: [] };
  for (const p of allPayments || []) {
    const sk = studentSchoolMap[p.student_id];
    if (sk && paymentsBySchool[sk]) {
      paymentsBySchool[sk].push(p);
    }
  }

  const toNumber = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  const schoolCards = matchers.map((m) => {
    const a = admissionsBySchool[m.key] || [];
    const s = studentsBySchool[m.key] || [];
    const pays = paymentsBySchool[m.key] || [];

    const confirmedPays = pays.filter((p) => Boolean(p?.confirmed));
    const confirmedCount = confirmedPays.length;
    const confirmedTotal = confirmedPays.reduce(
      (sum, p) => sum + toNumber(p?.amount),
      0,
    );

    return {
      key: m.key,
      label: m.label,
      applicants: a.length,
      students: s.length,
      paymentsConfirmedCount: confirmedCount,
      paymentsConfirmedTotal: confirmedTotal,
    };
  });

  const loadingSchools = studentsLoading || paymentsLoading;
  if (studentsError) {
    console.error(studentsError);
  }
  if (paymentsError) {
    console.error(paymentsError);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">Overview</h2>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="text-[#6E6E6E] text-sm mb-1">Total Converts</div>
          <div className="text-3xl font-bold text-black">
            {metrics?.converts || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="text-[#6E6E6E] text-sm mb-1">Displaced Supported</div>
          <div className="text-3xl font-bold text-black">
            {metrics?.displaced_supported || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="text-[#6E6E6E] text-sm mb-1">Cities Reached</div>
          <div className="text-3xl font-bold text-black">
            {metrics?.cities || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="text-[#6E6E6E] text-sm mb-1">Churches</div>
          <div className="text-3xl font-bold text-black">
            {metrics?.churches || 0}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#F4D03F] bg-opacity-20 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#C29C1A]" />
            </div>
            <div>
              <div className="text-sm text-[#6E6E6E]">School Applications</div>
              <div className="text-2xl font-bold text-black">
                {admissions?.length || 0}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#4FD1C5] bg-opacity-20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-[#38B2AC]" />
            </div>
            <div>
              <div className="text-sm text-[#6E6E6E]">
                Discipleship Requests
              </div>
              <div className="text-2xl font-bold text-black">
                {discipleshipRequests?.length || 0}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#9F7AEA] bg-opacity-20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#805AD5]" />
            </div>
            <div>
              <div className="text-sm text-[#6E6E6E]">Department Members</div>
              <div className="text-2xl font-bold text-black">
                {departmentMembers?.length || 0}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Metrics */}
      <h3 className="text-xl font-semibold text-black mb-4">School Metrics</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {schoolCards.map((sc) => {
          const applicants = sc.applicants;
          const studentsCount = sc.students;
          const confirmedCount = sc.paymentsConfirmedCount;
          const confirmedTotal = sc.paymentsConfirmedTotal;
          const totalLabel = loadingSchools
            ? "—"
            : confirmedTotal.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              });
          return (
            <div
              key={sc.key}
              className="bg-white rounded-xl p-6 border border-[#E9E9E9]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-black">{sc.label}</div>
                {/* simple status pill to indicate data state */}
                <span className="text-xs px-2 py-1 rounded-full border border-[#E9E9E9] text-[#6E6E6E]">
                  {loadingSchools ? "Loading" : "Live"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E6E6E]">Applicants</div>
                    <div className="text-xl font-semibold text-black">
                      {applicants}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ECFDF5] rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E6E6E]">Students</div>
                    <div className="text-xl font-semibold text-black">
                      {studentsCount}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E6E6E]">
                      Payments (confirmed)
                    </div>
                    <div className="text-xl font-semibold text-black">
                      {confirmedCount}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-lg flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-[#CA8A04]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E6E6E]">
                      Total Paid (NGN)
                    </div>
                    <div className="text-xl font-semibold text-black">
                      {totalLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
