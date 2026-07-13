import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PreviousConferences from "@/pages/PreviousConferences";
import Glimpses from "@/pages/Glimpses";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <PreviousConferences />
      <Glimpses />
    </div>
  );
}