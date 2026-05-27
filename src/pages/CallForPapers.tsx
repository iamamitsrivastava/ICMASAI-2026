"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  FileText, 
  Award, 
  Send, 
  Download, 
  Mail, 
  CheckCircle, 
  Users, 
  BookOpen,
  Leaf,
  Zap,
  ChevronDown
} from "lucide-react";

const CallForPapers = () => {
  const tracks = [
    {
      id: "track-1",
      title: "Climate Change, Sustainability and Integrated Agricultural Sciences",
      subThemes: [
        "Climate change mitigation and adaptation in agriculture",
        "Sustainable farming practices and soil conservation",
        "Integrated pest management and crop health",
        "Agroforestry and ecosystem services"
      ]
    },
    {
      id: "track-2",
      title: "Innovative Dairy and Food Processing for Quality, Nutrition and Safety",
      subThemes: [
        "Dairy processing innovations and product development",
        "Food safety and quality assurance mechanisms",
        "Nutritional enhancement of food products",
        "Advanced processing technologies"
      ]
    },
    {
      id: "track-3",
      title: "Artificial Intelligence, Digitalization and Smart Technologies in Agri-Food Systems",
      subThemes: [
        "Machine learning applications in agriculture",
        "IoT and sensor technologies for farming",
        "Precision agriculture and data analytics",
        "Blockchain for food traceability"
      ]
    },
    {
      id: "track-4",
      title: "Natural Farming and Biopesticides for Sustainable Agriculture",
      subThemes: [
        "Biopesticide development and applications",
        "Natural farming methodologies",
        "Biological pest control strategies",
        "Beneficial microorganisms and soil health"
      ]
    },
    {
      id: "track-5",
      title: "Medicinal and Aromatic Plants for Functional, Therapeutic and Value-Added Dairy & Food Systems",
      subThemes: [
        "Medicinal plant cultivation and processing",
        "Functional foods and nutraceuticals",
        "Therapeutic applications of aromatic plants",
        "Value-added product development"
      ]
    }
  ];

  const reviewers = [
    "Dr. Atanu H Jana",
    "Dr. Ajay Singh",
    "Dr Shaikh Adil",
    "Dr. Mukesh Laichattiwar",
    "Dr Nikhil Solanke"
  ];

  const downloadFile = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-4 gradient-text">
            Call for Papers
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Submit your groundbreaking research to ICQTDBT 2026. 
            We invite innovative papers on quantum technologies, digital transformation, and advanced technologies.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Download Abstract Format Section */}
            <Card className="p-8 glass-card">
              <div className="flex items-start justify-between flex-col md:flex-row md:items-center gap-6">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold gradient-text mb-2">Download Abstract Format</h2>
                  <p className="text-muted-foreground">
                    Start by downloading our abstract format to prepare your submission. This will help ensure your paper meets all requirements.
                  </p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow mt-6"
                onClick={() => downloadFile('abstract-format.pdf', 'Abstract Format')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Abstract Format
              </Button>
            </Card>

            {/* Proceedings Information */}
            <Card className="p-8 glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold gradient-text mb-2">Proceedings Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These proceedings are from the International Conference on Quantum Technologies and Digital Business Transformation 2026 (ICQTDBT 2026), 
                    which was organized by Parul University, Vadodara, India, on 12–13 March 2026. 
                    Editorial decision-making and oversight of the peer review process were conducted by the Conference Editorial Committee 
                    comprising distinguished academicians and subject experts from Parul University and associated institutions.
                  </p>
                </div>
              </div>
            </Card>

            {/* Peer Review Section - Reviewers */}
            <Card className="p-8 glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold gradient-text mb-4">Peer Review Panel</h2>
                  <p className="text-muted-foreground mb-6">
                    Your papers will be evaluated by a distinguished panel of reviewers committed to ensuring the highest standards of peer review.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Reviewers:</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {reviewers.map((reviewer, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-foreground">{reviewer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Taylor & Francis Acknowledgement */}
            <Card className="p-8 glass-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <span className="font-semibold">Acknowledgement:</span> Taylor & Francis played no part in the selection of editors or peer reviewers for these proceedings.
                </p>
              </div>
            </Card>

            {/* Conference Themes & Tracks */}
            <Card className="p-8 glass-card">
              <h2 className="text-2xl font-bold gradient-text mb-6">Conference Themes & Tracks</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {tracks.map((track) => (
                  <AccordionItem key={track.id} value={track.id} className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center space-x-3 text-left">
                        <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-base">{track.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="ml-8 space-y-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <ChevronDown className="w-4 h-4 mr-2" />
                          View Sub-Themes
                        </Button>
                        <div className="space-y-2">
                          {track.subThemes.map((theme, themeIdx) => (
                            <div key={themeIdx} className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                              <span className="text-sm text-foreground">{theme}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Note:</span> Tracks and sub-themes are not limited to the above list. 
                  Papers on related areas and interdisciplinary research are also welcome.
                </p>
              </div>
            </Card>

            {/* Submission Guidelines */}
            <Card className="p-8 glass-card">
              <h2 className="text-2xl font-bold gradient-text mb-6">Submission Guidelines</h2>
              <div className="space-y-8">

                {/* Author Guidelines */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Author Guidelines
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Full Length Research/Review Papers should follow the conference guidelines to ensure consistency and quality. 
                    Please review our comprehensive author guidelines before submission.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => downloadFile('author-guidelines.pdf', 'Author Guidelines')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Guidelines
                  </Button>
                </div>

                {/* Oral Presentation */}
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-primary" />
                    Oral Presentation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Prepare an engaging presentation in Times New Roman font. Presentations should be 10-12 slides. 
                    Download our PowerPoint template to maintain consistency and visual appeal.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => downloadFile('ppt-template.pptx', 'PPT Template')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PPT Template
                  </Button>
                </div>

                {/* Poster Presentation */}
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Poster Presentation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Create an impactful poster (3x4 feet size) with our professional template. 
                    Download the template and submit your poster with your paper for consideration in the poster track.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={() => downloadFile('poster-template.pptx', 'Poster Template')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow"
                      onClick={() => window.location.href = 'mailto:test@gmail.com?subject=Poster Submission'}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Poster
                    </Button>
                  </div>
                </div>

                {/* Other Categories */}
                <div className="pt-6 border-t bg-secondary/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-secondary" />
                    Abstract Submission for Other Categories
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Abstract submissions for other categories (workshops, lightning talks, industry sessions, etc.) 
                    should be made through the Microsoft CMT (Conference Management Toolkit) portal.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm"><span className="font-semibold">Portal:</span> Microsoft CMT - Available upon registration</p>
                    <p className="text-sm"><span className="font-semibold">Format:</span> Abstract submission only</p>
                    <p className="text-sm"><span className="font-semibold">Deadline:</span> As per conference schedule</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Microsoft CMT Acknowledgement */}
            <Card className="p-8 glass-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-bold gradient-text mb-4">Conference Management System</h2>
              <p className="text-muted-foreground mb-4">
                We acknowledge the support of Microsoft for providing the CMT (Conference Management Toolkit) service, 
                which streamlines our paper submission, abstract management, and publication workflow. 
                The CMT platform ensures secure, transparent, and efficient management of the submission process for ICQTDBT 2026.
              </p>
              <p className="text-sm text-muted-foreground">
                For technical support regarding submissions, please contact our conference secretariat at 
                <a href="mailto:test@gmail.com" className="text-primary hover:underline ml-1 font-semibold">test@gmail.com</a>
              </p>
            </Card>

            {/* CTA Section */}
            <Card className="p-8 glass-card border-2 border-primary/50">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-2">Ready to Submit?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We look forward to receiving your high-quality research contributions. 
                    Submit your papers before the deadline and join us in advancing sustainable agriculture and food systems.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow"
                    onClick={() => window.location.href = 'mailto:test@gmail.com'}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Your Paper
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Email: <a href="mailto:test@gmail.com" className="text-primary hover:underline font-semibold">test@gmail.com</a>
                </p>
              </div>
            </Card>

            {/* Key Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 glass-card hover-lift">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Best Paper Award</h3>
                  <p className="text-sm text-muted-foreground">
                    Outstanding papers will receive special recognition and awards
                  </p>
                </div>
              </Card>

              <Card className="p-6 glass-card hover-lift">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Publication</h3>
                  <p className="text-sm text-muted-foreground">
                    Accepted papers published in peer-reviewed proceedings
                  </p>
                </div>
              </Card>

              <Card className="p-6 glass-card hover-lift">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick review process with timely notification
                  </p>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;
