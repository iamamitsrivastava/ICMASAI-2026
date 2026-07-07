import CallForPapersSection from "@/components/CallForPapersSection";

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Call for Papers
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Submit your groundbreaking research to AISCT 2026-27. 
            We invite innovative papers on artificial intelligence, sustainable computing, and advanced technologies.
          </p>
        </div>
      </section>

      <CallForPapersSection />
    </div>
  );
};

export default CallForPapers;
