import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { HeroSection } from "@/components/DeepKnowledgeAcademy/HeroSection";
import { NavigationBar } from "@/components/DeepKnowledgeAcademy/NavigationBar";
import { AboutSection } from "@/components/DeepKnowledgeAcademy/AboutSection";
import { LevelsSection } from "@/components/DeepKnowledgeAcademy/LevelsSection";
import { CurriculumSection } from "@/components/DeepKnowledgeAcademy/CurriculumSection";
import { FacilitiesSection } from "@/components/DeepKnowledgeAcademy/FacilitiesSection";
import { ActivitiesSection } from "@/components/DeepKnowledgeAcademy/ActivitiesSection";
import { FeesSection } from "@/components/DeepKnowledgeAcademy/FeesSection";
import { CalendarSection } from "@/components/DeepKnowledgeAcademy/CalendarSection";
import { AdmissionsSection } from "@/components/DeepKnowledgeAcademy/AdmissionsSection";
import { FAQsSection } from "@/components/DeepKnowledgeAcademy/FAQsSection";
import { ContactSection } from "@/components/DeepKnowledgeAcademy/ContactSection";
import { useAcademySubjects } from "@/hooks/useAcademySubjects";

export default function DeepKnowledgeAcademyPage() {
  const navItems = [
    { id: "about", label: "About" },
    { id: "levels", label: "Nursery • Primary • Secondary" },
    { id: "curriculum", label: "Curriculum" },
    { id: "facilities", label: "Facilities" },
    { id: "activities", label: "Activities" },
    { id: "fees", label: "Fees & Aid" },
    { id: "calendar", label: "Calendar" },
    { id: "admissions", label: "Admissions" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" },
  ];

  const subjects = useAcademySubjects();

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <SEOHead path="/education/deep-knowledge-academy" />
      <ChurchHeader />
      <HeroSection />
      <NavigationBar navItems={navItems} />
      <AboutSection />
      <LevelsSection />
      <CurriculumSection subjects={subjects} />
      <FacilitiesSection />
      <ActivitiesSection />
      <FeesSection />
      <CalendarSection />
      <AdmissionsSection />
      <FAQsSection />
      <ContactSection />
      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
