import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Users, Plus, CheckCircle, Upload, DollarSign } from "lucide-react";

const INSTITUTIONS = [
  "Lawson University",
  "Sunrise Theological School",
  "Deep Knowledge Academy",
]; // keep labels consistent with forms

export function StudentsTab() {
  const qc = useQueryClient();
  const [activeSchool, setActiveSchool] = useState(INSTITUTIONS[0]);
  // ADD: selected year for payment tick filtering
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(String(currentYear));

  // Fetch students
  const {
    data: students = [],
    isLoading: studentsLoading,
    error: studentsError,
  } = useQuery({
    queryKey: ["students"],
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

  // Fetch payments (used for counts and paid-year tick)
  const { data: payments = [] } = useQuery({
    queryKey: ["student-payments"],
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

  const studentsBySchool = useMemo(
    () => (students || []).filter((s) => s.school_name === activeSchool),
    [students, activeSchool],
  );

  const paymentsByStudentId = useMemo(() => {
    const map = new Map();
    for (const p of payments || []) {
      const list = map.get(p.student_id) || [];
      list.push(p);
      map.set(p.student_id, list);
    }
    return map;
  }, [payments]);

  // HELPERS: derive year from payment record
  const extractPaymentYear = (p) => {
    // prefer payment_date if provided
    if (p.payment_date) {
      const d = new Date(p.payment_date);
      if (!isNaN(d.getTime())) return String(d.getFullYear());
    }
    // fallback: parse leading year from term like "2025/1" or "2024-Fall"
    if (p.term) {
      const m = String(p.term).match(/(20\d{2})/);
      if (m) return m[1];
    }
    // final fallback: created_at
    if (p.created_at) {
      const d2 = new Date(p.created_at);
      if (!isNaN(d2.getTime())) return String(d2.getFullYear());
    }
    return null;
  };

  const hasConfirmedPaymentForYear = (studentId, yearStr) => {
    const list = paymentsByStudentId.get(studentId) || [];
    for (const p of list) {
      if (!p.confirmed) continue;
      const y = extractPaymentYear(p);
      if (y && y === yearStr) return true;
    }
    return false;
  };

  // Create student
  const createStudent = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `When creating student, response was [${res.status}] ${res.statusText}: ${text}`,
        );
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["students"] });
    },
  });

  // RESTORE: createPayment mutation and pass to row
  const createPayment = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/student-payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(
          `When creating payment, response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["student-payments"] });
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-black flex items-center gap-2">
          <Users className="w-6 h-6" /> Students Management
        </h2>
      </div>

      {/* School selector + Year selector */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <div className="flex gap-2">
          {INSTITUTIONS.map((school) => (
            <button
              key={school}
              onClick={() => setActiveSchool(school)}
              className={`px-4 py-2 rounded-lg border text-sm ${
                activeSchool === school
                  ? "bg-[#F4D03F] border-[#E9E9E9] text-black"
                  : "bg-white border-[#E9E9E9] text-[#2B2B2B] hover:bg-[#FAFAFA]"
              }`}
            >
              {school}
            </button>
          ))}
        </div>
        {/* YEAR FILTER */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6E6E6E]">Payment year</label>
          <input
            type="number"
            min="2000"
            max="2100"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-3 py-2 border border-[#E9E9E9] rounded-lg w-[120px]"
          />
        </div>
      </div>

      {/* Add student form */}
      <AddStudentForm
        school={activeSchool}
        onSubmit={(values) => createStudent.mutate(values)}
        loading={createStudent.isLoading}
        error={createStudent.error?.message || null}
      />

      {/* Students table */}
      <div className="mt-8 bg-white rounded-xl border border-[#E9E9E9] overflow-hidden">
        <div className="px-6 py-4 bg-[#FAFAFA] border-b border-[#E9E9E9] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-black">{activeSchool}</h3>
            <p className="text-sm text-[#6E6E6E]">
              {studentsBySchool.length} student
              {studentsBySchool.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FAFAFA] border-b border-[#E9E9E9]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Program
                </th>
                {/* CHANGED: Degree -> Parent/Guardian (both) */}
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Parent / Guardian
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Discipline
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Adm. Year
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Grad. Year
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Payments
                </th>
                {/* NEW: Paid status for selected year */}
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Paid {selectedYear}
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E9E9]">
              {studentsLoading ? (
                <tr>
                  <td
                    colSpan={12}
                    className="px-6 py-6 text-center text-[#6E6E6E]"
                  >
                    Loading...
                  </td>
                </tr>
              ) : studentsError ? (
                <tr>
                  <td
                    colSpan={12}
                    className="px-6 py-6 text-center text-red-600"
                  >
                    Failed to load students
                  </td>
                </tr>
              ) : studentsBySchool.length === 0 ? (
                <tr>
                  <td
                    colSpan={12}
                    className="px-6 py-6 text-center text-[#6E6E6E]"
                  >
                    No students yet
                  </td>
                </tr>
              ) : (
                studentsBySchool.map((s) => (
                  <StudentRow
                    key={s.id}
                    s={s}
                    payments={paymentsByStudentId.get(s.id) || []}
                    onAddPayment={(payload) => createPayment.mutate(payload)}
                    addingPayment={createPayment.isLoading}
                    paidForSelectedYear={hasConfirmedPaymentForYear(
                      s.id,
                      selectedYear,
                    )}
                    selectedYear={selectedYear}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AddStudentForm({ school, onSubmit, loading, error }) {
  const [form, setForm] = useState({
    school_name: school,
    full_name: "",
    email: "",
    phone: "",
    program: "",
    // Parent/Guardian 1
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    // Parent/Guardian 2 (new)
    parent2_name: "",
    parent2_email: "",
    parent2_phone: "",
    discipline: "",
    admission_year: "",
    graduation_year: "",
    student_code: "",
    status: "enrolled",
  });
  const [localError, setLocalError] = useState(null);

  // keep in sync when school changes
  if (form.school_name !== school) {
    form.school_name = school; // eslint-disable-line no-param-reassign
  }

  const handleChange = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    const hasParent1 = form.parent_name && form.parent_name.trim();
    const hasParent2 = form.parent2_name && form.parent2_name.trim();
    if (!hasParent1 && !hasParent2) {
      setLocalError(
        "Provide at least one parent/guardian (a name is required).",
      );
      return;
    }
    const payload = {
      ...form,
      admission_year: form.admission_year ? Number(form.admission_year) : null,
      graduation_year: form.graduation_year
        ? Number(form.graduation_year)
        : null,
    };
    try {
      await onSubmit(payload);
      setForm({
        school_name: school,
        full_name: "",
        email: "",
        phone: "",
        program: "",
        parent_name: "",
        parent_email: "",
        parent_phone: "",
        parent2_name: "",
        parent2_email: "",
        parent2_phone: "",
        discipline: "",
        admission_year: "",
        graduation_year: "",
        student_code: "",
        status: "enrolled",
      });
    } catch (err) {
      // error handled by mutation
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-[#E9E9E9] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Plus className="w-4 h-4" />
        <h3 className="text-lg font-semibold text-black">Add Student</h3>
      </div>
      {(localError || error) && (
        <div className="mb-4 text-sm text-red-600">{localError || error}</div>
      )}
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.full_name}
          onChange={(e) => handleChange("full_name", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="text"
          placeholder="Program"
          value={form.program}
          onChange={(e) => handleChange("program", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        {/* Parent/Guardian 1 */}
        <input
          type="text"
          placeholder="Parent/Guardian 1 Name"
          value={form.parent_name}
          onChange={(e) => handleChange("parent_name", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="email"
          placeholder="Parent/Guardian 1 Email"
          value={form.parent_email}
          onChange={(e) => handleChange("parent_email", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="text"
          placeholder="Parent/Guardian 1 Phone"
          value={form.parent_phone}
          onChange={(e) => handleChange("parent_phone", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        {/* Parent/Guardian 2 */}
        <input
          type="text"
          placeholder="Parent/Guardian 2 Name"
          value={form.parent2_name}
          onChange={(e) => handleChange("parent2_name", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="email"
          placeholder="Parent/Guardian 2 Email"
          value={form.parent2_email}
          onChange={(e) => handleChange("parent2_email", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="text"
          placeholder="Parent/Guardian 2 Phone"
          value={form.parent2_phone}
          onChange={(e) => handleChange("parent2_phone", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="text"
          placeholder="Academic Discipline (e.g., Computer Science)"
          value={form.discipline}
          onChange={(e) => handleChange("discipline", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="number"
          placeholder="Admission Year"
          value={form.admission_year}
          onChange={(e) => handleChange("admission_year", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="number"
          placeholder="Graduation Year"
          value={form.graduation_year}
          onChange={(e) => handleChange("graduation_year", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <input
          type="text"
          placeholder="Student Code (optional)"
          value={form.student_code}
          onChange={(e) => handleChange("student_code", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        />
        <select
          value={form.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="px-3 py-2 border border-[#E9E9E9] rounded-lg"
        >
          <option value="enrolled">Enrolled</option>
          <option value="admitted">Admitted</option>
          <option value="graduated">Graduated</option>
          <option value="withdrawn">Withdrawn</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#F4D03F] rounded-lg text-black font-medium disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Student"}
        </button>
      </div>
    </form>
  );
}

function StudentRow({
  s,
  payments,
  onAddPayment,
  addingPayment,
  paidForSelectedYear,
  selectedYear,
}) {
  const [open, setOpen] = useState(false);
  const [p, setP] = useState({
    term: "",
    amount: "",
    currency: "NGN",
    method: "",
    reference: "",
    confirmed: true,
    receipt_url: "",
    payment_date: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      student_id: s.id,
      ...p,
      amount: p.amount ? Number(p.amount) : undefined,
      payment_date: p.payment_date || null,
    };
    await onAddPayment(payload);
    setP({
      term: "",
      amount: "",
      currency: "NGN",
      method: "",
      reference: "",
      confirmed: true,
      receipt_url: "",
      payment_date: "",
      notes: "",
    });
    setOpen(false);
  };

  return (
    <tr className="align-top">
      <td className="px-6 py-4 text-sm text-black">{s.full_name}</td>
      <td className="px-6 py-4 text-sm text-[#6E6E6E]">{s.email}</td>
      <td className="px-6 py-4 text-sm text-[#6E6E6E]">{s.phone || "-"}</td>
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">{s.program || "-"}</td>
      {/* Parent/Guardian display: show up to two */}
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        {s.parent_name || s.parent2_name ? (
          <div className="space-y-1">
            {s.parent_name && (
              <div>
                <div className="text-[#2B2B2B]">{s.parent_name}</div>
                <div className="text-xs text-[#6E6E6E]">
                  {s.parent_email || ""}
                  {s.parent_email && s.parent_phone ? " • " : ""}
                  {s.parent_phone || ""}
                </div>
              </div>
            )}
            {s.parent2_name && (
              <div>
                <div className="text-[#2B2B2B]">{s.parent2_name}</div>
                <div className="text-xs text-[#6E6E6E]">
                  {s.parent2_email || ""}
                  {s.parent2_email && s.parent2_phone ? " • " : ""}
                  {s.parent2_phone || ""}
                </div>
              </div>
            )}
          </div>
        ) : (
          <span className="text-[#6E6E6E]">-</span>
        )}
      </td>
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        {s.discipline || "-"}
      </td>
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        {s.admission_year || "-"}
      </td>
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        {s.graduation_year || "-"}
      </td>
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        <span
          className={`px-2 py-1 rounded text-xs ${
            s.status === "graduated"
              ? "bg-green-100 text-green-700"
              : s.status === "suspended"
                ? "bg-red-100 text-red-700"
                : s.status === "withdrawn"
                  ? "bg-gray-100 text-gray-700"
                  : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {s.status}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        <div className="flex items-center gap-1">
          <DollarSign className="w-4 h-4 text-[#C29C1A]" />
          <span>{payments.length}</span>
        </div>
      </td>
      {/* Year-paid tick */}
      <td className="px-6 py-4 text-sm text-[#2B2B2B]">
        {paidForSelectedYear ? (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs">Paid</span>
          </div>
        ) : (
          <span className="text-xs text-[#6E6E6E]">Unpaid</span>
        )}
      </td>
      <td className="px-6 py-4 text-sm">
        <button
          onClick={() => setOpen((v) => !v)}
          className="px-3 py-1.5 rounded-lg border border-[#E9E9E9] hover:bg-[#FAFAFA] text-sm"
        >
          {open ? "Cancel" : "Add Payment"}
        </button>
        {open && (
          <form onSubmit={handleSubmit} className="mt-3 space-y-2">
            <div className="grid md:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Term (e.g., 2025/1)"
                value={p.term}
                onChange={(e) => setP((x) => ({ ...x, term: e.target.value }))}
                className="px-2 py-2 border border-[#E9E9E9] rounded"
              />
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Amount"
                value={p.amount}
                onChange={(e) =>
                  setP((x) => ({ ...x, amount: e.target.value }))
                }
                className="px-2 py-2 border border-[#E9E9E9] rounded"
                required
              />
              <input
                type="text"
                placeholder="Method (Bank/Online/Cash)"
                value={p.method}
                onChange={(e) =>
                  setP((x) => ({ ...x, method: e.target.value }))
                }
                className="px-2 py-2 border border-[#E9E9E9] rounded"
              />
              <input
                type="text"
                placeholder="Reference"
                value={p.reference}
                onChange={(e) =>
                  setP((x) => ({ ...x, reference: e.target.value }))
                }
                className="px-2 py-2 border border-[#E9E9E9] rounded"
              />
              <input
                type="url"
                placeholder="Receipt URL (optional)"
                value={p.receipt_url}
                onChange={(e) =>
                  setP((x) => ({ ...x, receipt_url: e.target.value }))
                }
                className="px-2 py-2 border border-[#E9E9E9] rounded"
              />
              <input
                type="date"
                placeholder="Payment Date"
                value={p.payment_date}
                onChange={(e) =>
                  setP((x) => ({ ...x, payment_date: e.target.value }))
                }
                className="px-2 py-2 border border-[#E9E9E9] rounded"
              />
              <div className="flex items-center gap-2">
                <input
                  id={`confirmed-${s.id}`}
                  type="checkbox"
                  checked={p.confirmed}
                  onChange={(e) =>
                    setP((x) => ({ ...x, confirmed: e.target.checked }))
                  }
                />
                <label htmlFor={`confirmed-${s.id}`} className="text-sm">
                  Confirmed
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={addingPayment}
                className="px-3 py-2 bg-[#F4D03F] rounded text-black text-sm disabled:opacity-60"
              >
                {addingPayment ? "Saving..." : "Save Payment"}
              </button>
            </div>
          </form>
        )}
      </td>
    </tr>
  );
}
