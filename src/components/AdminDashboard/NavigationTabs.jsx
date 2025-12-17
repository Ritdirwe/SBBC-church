import {
  TrendingUp,
  Activity,
  FileText,
  GraduationCap,
  Users,
  Mail,
  Settings,
  Search,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: TrendingUp },
  { id: "analytics", label: "Analytics", icon: Activity },
  { id: "submissions", label: "All Submissions", icon: FileText },
  { id: "admissions", label: "School Admissions", icon: GraduationCap },
  // Added new Students tab between Admissions and Discipleship
  { id: "students", label: "Students", icon: Users },
  { id: "discipleship", label: "Discipleship", icon: Users },
  { id: "departments", label: "Departments", icon: Mail },
  { id: "counseling", label: "Counseling", icon: Mail },
  { id: "seo", label: "SEO", icon: Search },
  { id: "settings", label: "Settings", icon: Settings },
];

export function NavigationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="bg-white border-b border-[#E9E9E9] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-[#F4D03F] text-black"
                  : "border-transparent text-[#6E6E6E] hover:text-black"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
