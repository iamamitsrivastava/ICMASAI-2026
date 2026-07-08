import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import ConferenceTracks from "@/components/ConferenceTracks";
import ImportantDates from "@/components/ImportantDates";
import Speakers from "@/components/Speakers";
import SubmissionPortal from "@/components/SubmissionPortal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <ConferenceTracks />
      <ImportantDates />
      <Speakers />
      <SubmissionPortal />
    </div>
  );
}