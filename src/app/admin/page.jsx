"use client";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useUser from "@/utils/useUser";
import { useAdminData } from "@/hooks/useAdminData";
import { DashboardHeader } from "@/components/AdminDashboard/DashboardHeader";
import { NavigationTabs } from "@/components/AdminDashboard/NavigationTabs";
import { OverviewTab } from "@/components/AdminDashboard/OverviewTab";
import { AnalyticsTab } from "@/components/AdminDashboard/AnalyticsTab";
import { SubmissionsTab } from "@/components/AdminDashboard/SubmissionsTab";
import { AdmissionsTab } from "@/components/AdminDashboard/AdmissionsTab";
import { DiscipleshipTab } from "@/components/AdminDashboard/DiscipleshipTab";
import { DepartmentsTab } from "@/components/AdminDashboard/DepartmentsTab";
import { CounselingTab } from "@/components/AdminDashboard/CounselingTab";
import { SettingsTab } from "@/components/AdminDashboard/SettingsTab";
import { SEOTab } from "@/components/AdminDashboard/SEOTab";
import { StudentsTab } from "@/components/AdminDashboard/StudentsTab";

export default function AdminDashboard() {
  const { user, loading: userLoading } = useUser();
  const [activeTab, setActiveTab] = useState("overview");
  const [queryClient] = useState(() => new QueryClient());

  // NEW: temporary bypass flag so you can access dashboard without signing in
  const [bypass, setBypass] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get("bypass") === "1";
      const fromStorage =
        window.localStorage.getItem("SBBC_ADMIN_BYPASS") === "1";
      const enabled = fromQuery || fromStorage;
      if (enabled) {
        setBypass(true);
        if (fromQuery && !fromStorage) {
          window.localStorage.setItem("SBBC_ADMIN_BYPASS", "1");
        }
      }
    } catch (_) {
      // ignore
    }
  }, []);

  // Update: route users to a helper page that will set admin + sign in
  useEffect(() => {
    if (userLoading) return;
    if (typeof window === "undefined") return;

    // If bypass is enabled, do not redirect
    if (bypass) {
      return;
    }

    if (!user) {
      // Send to auto-helper that prepares account and signs in
      window.location.replace("/admin-access");
      return;
    }
    if (!user.is_admin) {
      // If signed in but not admin, fix it via helper
      window.location.replace("/admin-access");
      return;
    }
  }, [userLoading, user, bypass]);

  const effectiveUser = bypass
    ? { name: "Admin (Bypass)", is_admin: true }
    : user;

  // Wrap dashboard content with React Query provider
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={effectiveUser}
        userLoading={userLoading && !bypass}
        bypass={bypass}
      />
    </QueryClientProvider>
  );
}

// NEW: Split content so we can use React Query hooks safely inside provider
function DashboardContent({
  activeTab,
  setActiveTab,
  user,
  userLoading,
  bypass,
}) {
  const {
    metrics,
    admissions,
    discipleshipRequests,
    departmentMembers,
    counselingBookings,
    globalLoading,
  } = useAdminData();

  if (userLoading || (!user && typeof window !== "undefined" && !bypass)) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-xl text-[#6E6E6E]">Loading...</div>
      </div>
    );
  }

  if (globalLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-xl text-[#6E6E6E]">Loading data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Temporary banner to indicate bypass mode */}
      {bypass && (
        <div className="w-full bg-[#FEF3C7] text-[#92400E] text-center py-2 text-sm">
          Temporary access enabled (bypass). For security, turn this off later
          by visiting /admin-bypass/disable
        </div>
      )}
      <DashboardHeader />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {activeTab === "overview" && (
          <OverviewTab
            metrics={metrics}
            admissions={admissions}
            discipleshipRequests={discipleshipRequests}
            departmentMembers={departmentMembers}
          />
        )}

        {activeTab === "analytics" && (
          <AnalyticsTab
            admissions={admissions}
            discipleshipRequests={discipleshipRequests}
            departmentMembers={departmentMembers}
            counselingBookings={counselingBookings}
          />
        )}

        {activeTab === "submissions" && (
          <SubmissionsTab
            admissions={admissions}
            discipleshipRequests={discipleshipRequests}
            departmentMembers={departmentMembers}
            counselingBookings={counselingBookings}
          />
        )}

        {activeTab === "admissions" && (
          <AdmissionsTab admissions={admissions} />
        )}

        {/* NEW: Students tab render */}
        {activeTab === "students" && <StudentsTab />}

        {activeTab === "discipleship" && (
          <DiscipleshipTab discipleshipRequests={discipleshipRequests} />
        )}

        {activeTab === "departments" && (
          <DepartmentsTab departmentMembers={departmentMembers} />
        )}

        {activeTab === "counseling" && (
          <CounselingTab counselingBookings={counselingBookings} />
        )}

        {activeTab === "seo" && <SEOTab />}

        {activeTab === "settings" && <SettingsTab metrics={metrics} />}
      </div>
    </div>
  );
}
