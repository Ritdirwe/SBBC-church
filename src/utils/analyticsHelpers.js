export const lastNDays = (n) => {
  const days = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push(key);
  }
  return days;
};

export const toDateKey = (d) => new Date(d).toISOString().slice(0, 10);

export const prepareLineChartData = (
  days,
  admissions,
  discipleshipRequests,
  departmentMembers,
  counselingBookings,
) => {
  return days.map((day) => {
    const a = admissions.filter((x) => toDateKey(x.created_at) === day).length;
    const d = discipleshipRequests.filter(
      (x) => toDateKey(x.created_at) === day,
    ).length;
    const m = departmentMembers.filter(
      (x) => toDateKey(x.created_at) === day,
    ).length;
    const c = counselingBookings.filter(
      (x) => toDateKey(x.created_at) === day,
    ).length;
    return {
      day,
      Admissions: a,
      Discipleship: d,
      Departments: m,
      Counseling: c,
      Total: a + d + m + c,
    };
  });
};

export const prepareAdmissionsBySchool = (admissions) => {
  const map = new Map();
  for (const a of admissions) {
    const key = a.school_name || "(Unknown)";
    map.set(key, (map.get(key) || 0) + 1);
  }
  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
};

export const prepareDepartmentBreakdown = (departmentMembers) => {
  const map = new Map();
  for (const m of departmentMembers) {
    const key = m.department || "(Unspecified)";
    map.set(key, (map.get(key) || 0) + 1);
  }
  return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
};

export const CHART_COLORS = [
  "#F4D03F",
  "#9F7AEA",
  "#4FD1C5",
  "#F56565",
  "#63B3ED",
  "#48BB78",
  "#ED8936",
];

// --- NEW HELPERS FOR RICHER ANALYTICS ---

// Return last N months as { key: 'YYYY-MM', label: 'Mon YYYY' }
export const lastNMonths = (n) => {
  const out = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
    out.push({ key, label });
  }
  return out;
};

const toMonthKey = (d) => {
  const date = new Date(d);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdayIndex = (date) => {
  const js = new Date(date).getDay(); // 0=Sun ... 6=Sat
  return js === 0 ? 6 : js - 1; // 0..6 mapped to Mon..Sun
};

export const prepareSubmissionTotals = (
  admissions = [],
  discipleshipRequests = [],
  departmentMembers = [],
  counselingBookings = [],
) => {
  const totals = {
    admissions: admissions.length,
    discipleship: discipleshipRequests.length,
    departments: departmentMembers.length,
    counseling: counselingBookings.length,
  };
  return {
    ...totals,
    all:
      totals.admissions +
      totals.discipleship +
      totals.departments +
      totals.counseling,
  };
};

export const prepareTypeSplit = (
  admissions = [],
  discipleshipRequests = [],
  departmentMembers = [],
  counselingBookings = [],
) => {
  return [
    { name: "Admissions", value: admissions.length },
    { name: "Discipleship", value: discipleshipRequests.length },
    { name: "Departments", value: departmentMembers.length },
    { name: "Counseling", value: counselingBookings.length },
  ];
};

export const prepareMonthlyTrend = (
  admissions = [],
  discipleshipRequests = [],
  departmentMembers = [],
  counselingBookings = [],
  months = 6,
) => {
  const monthsList = lastNMonths(months);
  return monthsList.map(({ key, label }) => {
    const a = admissions.filter((x) => toMonthKey(x.created_at) === key).length;
    const d = discipleshipRequests.filter(
      (x) => toMonthKey(x.created_at) === key,
    ).length;
    const m = departmentMembers.filter(
      (x) => toMonthKey(x.created_at) === key,
    ).length;
    const c = counselingBookings.filter(
      (x) => toMonthKey(x.created_at) === key,
    ).length;
    return {
      monthKey: key,
      month: label,
      Admissions: a,
      Discipleship: d,
      Departments: m,
      Counseling: c,
      Total: a + d + m + c,
    };
  });
};

export const prepareWeekdayBreakdown = (
  admissions = [],
  discipleshipRequests = [],
  departmentMembers = [],
  counselingBookings = [],
) => {
  const rows = weekdays.map((name) => ({
    name,
    Admissions: 0,
    Discipleship: 0,
    Departments: 0,
    Counseling: 0,
    Total: 0,
  }));
  const bump = (arr, field) => {
    for (const x of arr) {
      const idx = weekdayIndex(x.created_at);
      rows[idx][field] += 1;
      rows[idx].Total += 1;
    }
  };
  bump(admissions, "Admissions");
  bump(discipleshipRequests, "Discipleship");
  bump(departmentMembers, "Departments");
  bump(counselingBookings, "Counseling");
  return rows;
};

export const prepareHourDistribution = (
  admissions = [],
  discipleshipRequests = [],
  departmentMembers = [],
  counselingBookings = [],
) => {
  const rows = Array.from({ length: 24 }, (_, h) => ({
    hour: h,
    label: `${h}:00`,
    Admissions: 0,
    Discipleship: 0,
    Departments: 0,
    Counseling: 0,
    Total: 0,
  }));
  const bump = (arr, field) => {
    for (const x of arr) {
      const hour = new Date(x.created_at).getHours();
      if (Number.isInteger(hour) && hour >= 0 && hour <= 23) {
        rows[hour][field] += 1;
        rows[hour].Total += 1;
      }
    }
  };
  bump(admissions, "Admissions");
  bump(discipleshipRequests, "Discipleship");
  bump(departmentMembers, "Departments");
  bump(counselingBookings, "Counseling");
  return rows;
};
