import { useQuery } from "@tanstack/react-query";

export function useAdminData() {
  const {
    data: metrics,
    isLoading: metricsLoading,
    error: metricsError,
  } = useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const res = await fetch("/api/metrics");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/metrics, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const { data: admissions = [], isLoading: admissionsLoading } = useQuery({
    queryKey: ["admissions"],
    queryFn: async () => {
      const res = await fetch("/api/school-admission");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/school-admission, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const { data: discipleshipRequests = [], isLoading: discipleshipLoading } =
    useQuery({
      queryKey: ["discipleship"],
      queryFn: async () => {
        const res = await fetch("/api/discipleship");
        if (!res.ok) {
          throw new Error(
            `When fetching /api/discipleship, the response was [${res.status}] ${res.statusText}`,
          );
        }
        return res.json();
      },
    });

  const { data: departmentMembers = [], isLoading: departmentsLoading } =
    useQuery({
      queryKey: ["department-join"],
      queryFn: async () => {
        const res = await fetch("/api/department-join");
        if (!res.ok) {
          throw new Error(
            `When fetching /api/department-join, the response was [${res.status}] ${res.statusText}`,
          );
        }
        return res.json();
      },
    });

  const { data: counselingBookings = [], isLoading: counselingLoading } =
    useQuery({
      queryKey: ["counseling-booking"],
      queryFn: async () => {
        const res = await fetch("/api/counseling-booking");
        if (!res.ok) {
          throw new Error(
            `When fetching /api/counseling-booking, the response was [${res.status}] ${res.statusText}`,
          );
        }
        return res.json();
      },
    });

  const globalLoading =
    metricsLoading ||
    admissionsLoading ||
    discipleshipLoading ||
    departmentsLoading ||
    counselingLoading;

  return {
    metrics,
    metricsError,
    admissions,
    discipleshipRequests,
    departmentMembers,
    counselingBookings,
    globalLoading,
  };
}
