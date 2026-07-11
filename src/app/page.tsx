import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PreviousConferences from "@/pages/PreviousConferences";
import ImportantDates from "@/components/ImportantDates";
import SubmissionPortal from "@/components/SubmissionPortal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <PreviousConferences />
      <ImportantDates />
      <SubmissionPortal />
    </div>
  );
}