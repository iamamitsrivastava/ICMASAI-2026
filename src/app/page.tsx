import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Glimpses from "@/pages/Glimpses";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <Glimpses />
    </div>
  );
}