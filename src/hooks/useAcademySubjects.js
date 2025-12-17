import { useMemo } from "react";

export function useAcademySubjects() {
  const subjects = useMemo(
    () => ({
      nursery: [
        "Early Literacy",
        "Numeracy",
        "Bible Stories",
        "Music & Art",
        "Play-based Learning",
      ],
      primary: [
        "English",
        "Mathematics",
        "Basic Science",
        "Social Studies",
        "ICT",
        "Bible & Character",
      ],
      secondary: [
        "English",
        "Mathematics",
        "Biology",
        "Chemistry",
        "Physics",
        "Geography",
        "ICT",
        "Christian Religion Studies",
      ],
    }),
    [],
  );

  return subjects;
}
