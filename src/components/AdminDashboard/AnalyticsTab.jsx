import { useMemo } from "react";
import {
  Activity,
  PieChart as PieChartIcon,
  BarChart3,
  TrendingUp,
  Clock,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  // NEW: extra chart types
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import {
  lastNDays,
  prepareLineChartData,
  prepareAdmissionsBySchool,
  prepareDepartmentBreakdown,
  CHART_COLORS,
  // NEW helpers
  prepareMonthlyTrend,
  prepareWeekdayBreakdown,
  prepareHourDistribution,
  prepareSubmissionTotals,
} from "@/utils/analyticsHelpers";

export function AnalyticsTab({
  admissions,
  discipleshipRequests,
  departmentMembers,
  counselingBookings,
}) {
  const days14 = lastNDays(14);

  const lineSeries = useMemo(
    () =>
      prepareLineChartData(
        days14,
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings,
      ),
    [
      days14,
      admissions,
      discipleshipRequests,
      departmentMembers,
      counselingBookings,
    ],
  );

  const admissionsBySchool = useMemo(
    () => prepareAdmissionsBySchool(admissions),
    [admissions],
  );

  const deptBreakdown = useMemo(
    () => prepareDepartmentBreakdown(departmentMembers),
    [departmentMembers],
  );

  // NEW: richer analytics
  const totals = useMemo(
    () =>
      prepareSubmissionTotals(
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings,
      ),
    [admissions, discipleshipRequests, departmentMembers, counselingBookings],
  );

  const monthlyTrend = useMemo(
    () =>
      prepareMonthlyTrend(
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings,
        6,
      ),
    [admissions, discipleshipRequests, departmentMembers, counselingBookings],
  );

  const weekday = useMemo(
    () =>
      prepareWeekdayBreakdown(
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings,
      ),
    [admissions, discipleshipRequests, departmentMembers, counselingBookings],
  );

  const hourDist = useMemo(
    () =>
      prepareHourDistribution(
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings,
      ),
    [admissions, discipleshipRequests, departmentMembers, counselingBookings],
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">Analytics</h2>

      {/* NEW: KPI summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 border border-[#E9E9E9]">
          <div className="text-xs text-[#6E6E6E]">Admissions</div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-2xl font-semibold text-black">
              {totals.admissions}
            </div>
            <TrendingUp className="w-5 h-5 text-[#9F7AEA]" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-[#E9E9E9]">
          <div className="text-xs text-[#6E6E6E]">Discipleship</div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-2xl font-semibold text-black">
              {totals.discipleship}
            </div>
            <TrendingUp className="w-5 h-5 text-[#4FD1C5]" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-[#E9E9E9]">
          <div className="text-xs text-[#6E6E6E]">Department Signups</div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-2xl font-semibold text-black">
              {totals.departments}
            </div>
            <TrendingUp className="w-5 h-5 text-[#F4D03F]" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-[#E9E9E9]">
          <div className="text-xs text-[#6E6E6E]">Counseling</div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-2xl font-semibold text-black">
              {totals.counseling}
            </div>
            <TrendingUp className="w-5 h-5 text-[#F56565]" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Submissions over time */}
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold">
            <Activity className="w-5 h-5" /> Submissions (Last 14 days)
          </div>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineSeries}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Admissions"
                  stroke="#9F7AEA"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Discipleship"
                  stroke="#4FD1C5"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Departments"
                  stroke="#F4D03F"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Counseling"
                  stroke="#F56565"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Admissions by school */}
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold">
            <PieChartIcon className="w-5 h-5" /> Admissions by School
          </div>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={admissionsBySchool}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {admissionsBySchool.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department signups */}
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold">
            <BarChart3 className="w-5 h-5" /> Department Signups
          </div>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={deptBreakdown}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                  height={50}
                />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#9F7AEA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* NEW ROW: More insights */}
      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* Monthly trend (last 6 months) */}
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold">
            <TrendingUp className="w-5 h-5" /> Monthly Trend (6 months)
          </div>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={monthlyTrend}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="Admissions"
                  stackId="1"
                  stroke="#9F7AEA"
                  fill="#9F7AEA33"
                />
                <Area
                  type="monotone"
                  dataKey="Discipleship"
                  stackId="1"
                  stroke="#4FD1C5"
                  fill="#4FD1C533"
                />
                <Area
                  type="monotone"
                  dataKey="Departments"
                  stackId="1"
                  stroke="#F4D03F"
                  fill="#F4D03F33"
                />
                <Area
                  type="monotone"
                  dataKey="Counseling"
                  stackId="1"
                  stroke="#F56565"
                  fill="#F5656533"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekday activity (Mon-Sun) */}
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold">
            <Clock className="w-5 h-5" /> Activity by Weekday
          </div>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weekday}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Admissions" stackId="a" fill="#9F7AEA" />
                <Bar dataKey="Discipleship" stackId="a" fill="#4FD1C5" />
                <Bar dataKey="Departments" stackId="a" fill="#F4D03F" />
                <Bar dataKey="Counseling" stackId="a" fill="#F56565" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active hours (0-23) */}
        <div className="bg-white rounded-xl p-6 border border-[#E9E9E9]">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold">
            <Clock className="w-5 h-5" /> Active Hours (24h)
          </div>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="20%"
                outerRadius="90%"
                data={hourDist}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, Math.max(1, ...hourDist.map((h) => h.Total))]}
                  tick={false}
                />
                <RadialBar
                  minAngle={2}
                  background
                  clockWise
                  dataKey="Total"
                  fill="#63B3ED"
                />
                <Tooltip
                  formatter={(v, n, props) => [
                    v,
                    `${props?.payload?.label || ""}`,
                  ]}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
