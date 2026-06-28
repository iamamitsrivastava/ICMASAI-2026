import { Upload, FileText, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const SubmissionPortal = () => {
  const submissionSteps = [
    {
      icon: FileText,
      title: "Prepare Your Paper",
      description: "Format your paper according to IEEE guidelines",
    },
    {
      icon: Upload,
      title: "Submit Online",
      description: "Upload through our secure submission portal",
    },
    {
      icon: Clock,
      title: "Review Process",
      description: "Double-blind peer review by experts",
    },
    {
      icon: CheckCircle,
      title: "Notification",
      description: "Receive acceptance decision via email",
    },
  ];

  const guidelines = [
    "Papers must be original and not published elsewhere",
    "Maximum 8 pages in IEEE double-column format",
    "Include abstract (150-250 words) and keywords (4-6)",
    "References must follow IEEE citation style",
    "Submit in PDF format only",
  ];

  return (
    <section id="submission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Paper <span className="text-blue-950">Submission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Submit your research and join the global academic community
          </p>
        </div>

        {/* Submission Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {submissionSteps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 sketch-border flex items-center justify-center text-black">
                  <step.icon className="w-8 h-8" />
                </div>
                {index < submissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 border-t-2 border-dashed border-[#222]" />
                )}
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className=" flex justify-center">
          {/* Guidelines Card */}
          {/* <Card className=" p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6">Submission Guidelines</h3>
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{guideline}</span>
                </li>
              ))}
            </ul>
            <Link href="/paper-templates">
              <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                Download Template
              </Button>
            </Link>
          </Card> */}

          {/* Submission Portal Card */}
          <div className="sketch-card p-8 w-full max-w-md">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 sketch-border flex items-center justify-center">
                <Upload className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Submit?</h3>
              <p className="text-muted-foreground mb-6">
                Our submission portal is now open. Submit your research paper and track its status in real-time.
              </p>
              <div className="space-y-3">
                <Link href="/call-for-papers">
                  <button className="sketch-button w-full mb-3 text-black bg-[#222]">
                    Submit Your Paper
                  </button>
                </Link>
                
                <button className="sketch-button w-full">
                  Track Submission Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionPortal;