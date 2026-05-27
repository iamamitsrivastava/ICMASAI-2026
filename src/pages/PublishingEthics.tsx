"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Users,
  FileText,
  Scale,
  Clipboard,
  CheckCircle,
  Shield,
  Mail,
  Download,
  Copyright,
  AlertCircle,
  Check,
} from "lucide-react";

const PublishingEthics = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/documents/author-guidelines.pdf";
    link.download = "author-guidelines.pdf";
    link.click();
  };

  const sections = [
    {
      id: "authors-responsibilities",
      title: "Authors and Their Responsibilities",
      icon: Users,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Original Work Requirements</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Submit only original, previously unpublished research work</li>
              <li>Work must not be submitted simultaneously to other journals or conferences</li>
              <li>All authors must agree on authorship and order before submission</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Peer Review Process</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Accept the peer review process and address reviewer comments constructively</li>
              <li>Provide detailed responses to reviewer feedback</li>
              <li>Be transparent about any limitations in the research methodology</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Co-authorship Limits</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Maximum of 5 co-authors per paper</li>
              <li>All co-authors must have made substantial contributions to the work</li>
              <li>Each co-author must approve the final manuscript</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "manuscript-formatting",
      title: "Manuscript Formatting Requirements",
      icon: FileText,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Page Length and Structure</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Full-length papers: 6-10 pages</li>
              <li>Review papers: 8-12 pages</li>
              <li>Font: Times New Roman, 12pt</li>
              <li>Line spacing: 1.5</li>
              <li>Margins: 1 inch on all sides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Required Sections</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Title (concise and descriptive)</li>
              <li>Author information with affiliations</li>
              <li>Abstract (100-150 words)</li>
              <li>Keywords (4-6 words)</li>
              <li>Introduction, Methodology, Results, Discussion, Conclusion</li>
              <li>References</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technical Requirements</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Submit in Word (.docx) or PDF format</li>
              <li>Figures and tables with clear captions</li>
              <li>High-quality images (minimum 300 DPI)</li>
              <li>Equations should be created using equation editor</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "references",
      title: "References",
      icon: Scale,
      color: "secondary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Citation Style: APA Format</h4>
            <p className="text-muted-foreground mb-4">
              All references must be cited in APA (American Psychological Association) format.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Arrangement</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Arrange references in alphabetical order by author surname</li>
              <li>Use hanging indentation for each reference</li>
              <li>Include all referenced materials (journals, books, websites)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Example References</h4>
            <div className="bg-secondary/5 p-4 rounded-lg space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Journal Article:</strong> Author, A. A., & Author, B. B. (2023). Title of article. <em>Title of Periodical</em>, 10(5), 12-34.
              </p>
              <p>
                <strong>Book:</strong> Author, A. A. (2023). <em>Title of work</em>. Publisher.
              </p>
              <p>
                <strong>Website:</strong> Author, A. A. (2023). Title. Retrieved from https://example.com
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "peer-review",
      title: "Peer-Review Process",
      icon: Clipboard,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Editorial Checks</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Initial manuscript screening for scope and quality</li>
              <li>Verification of formatting compliance</li>
              <li>Check for plagiarism using Turnitin</li>
              <li>Verification that the work is original and not previously published</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Reviewer Evaluation Criteria</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Originality and contribution to the field</li>
              <li>Methodology appropriateness and validity</li>
              <li>Quality of writing and presentation</li>
              <li>Significance and impact of the research</li>
              <li>Accuracy of data and conclusions</li>
              <li>Proper citation of related work</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Review Outcomes</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Accept: Paper accepted as is</li>
              <li>Accept with minor revisions: Address small issues</li>
              <li>Reject with invitation to resubmit: Major revisions needed</li>
              <li>Reject: Does not meet publication standards</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "publication-ethics",
      title: "Publication Ethics",
      icon: CheckCircle,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Ethical Principles</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Conflict of Interest</p>
                  <p className="text-sm text-muted-foreground">Disclose any financial, professional, or personal relationships that could influence the work</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Research Accuracy</p>
                  <p className="text-sm text-muted-foreground">Ensure all data and claims are accurate, with proper documentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Methodology</p>
                  <p className="text-sm text-muted-foreground">Use appropriate, valid research methods and clearly document procedures</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Data Integrity</p>
                  <p className="text-sm text-muted-foreground">Do not fabricate, falsify, or manipulate research data or results</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Ethical Review</p>
                  <p className="text-sm text-muted-foreground">Research involving human subjects or animals must have appropriate ethics approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "retraction-policy",
      title: "Policy on Retraction and Correction",
      icon: Shield,
      color: "secondary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Corrections</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Minor errors (spelling, formatting) can be corrected via errata</li>
              <li>Authors should notify the conference immediately upon discovering errors</li>
              <li>Corrections are published in subsequent materials or proceedings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Retraction Grounds</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Evidence of plagiarism or self-plagiarism</li>
              <li>Fabricated or falsified data</li>
              <li>Serious breach of research ethics</li>
              <li>Duplicate publication without permission</li>
              <li>Major errors that invalidate the findings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Plagiarism Handling</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Detection: All papers screened with Turnitin similarity index</li>
              <li>Threshold: Similarity index above 20% requires investigation</li>
              <li>Action: Cases of plagiarism result in rejection and possible sanctions</li>
              <li>Appeal: Authors can appeal plagiarism decisions with explanation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "originality-plagiarism",
      title: "Originality and Plagiarism",
      icon: Check,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Plagiarism Definition</h4>
            <p className="text-muted-foreground mb-4">
              Plagiarism is the use of someone&apos;s work, ideas, or words without proper attribution. This includes text, data, figures, and code.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accepted Practices</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Properly cite all sources using APA format</li>
              <li>Use quotation marks for direct quotes</li>
              <li>Paraphrase appropriately with citations</li>
              <li>Use your own words and analysis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Plagiarism Index Limits</h4>
            <div className="bg-primary/5 p-4 rounded-lg space-y-2">
              <p className="text-muted-foreground">
                <strong>0-10%:</strong> Excellent - minimal similarities
              </p>
              <p className="text-muted-foreground">
                <strong>10-20%:</strong> Good - acceptable similarity (mostly citations)
              </p>
              <p className="text-muted-foreground">
                <strong>20-30%:</strong> Caution - requires review
              </p>
              <p className="text-muted-foreground">
                <strong>&gt;30%:</strong> Likely plagiarism - paper rejected
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">AI-Generated Content Policy</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>Prohibited:</strong> Using AI to generate primary research or results</li>
              <li><strong>Prohibited:</strong> Submitting AI-generated text as original work</li>
              <li><strong>Allowed:</strong> Using AI for grammar/language checking</li>
              <li><strong>Required:</strong> Disclose any AI tool usage in acknowledgments</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "authorship",
      title: "Authorship of the Paper",
      icon: Users,
      color: "secondary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Authorship Criteria</h4>
            <p className="text-muted-foreground mb-4">
              An author must have made substantial contributions to at least two of the following:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Conception and design of the research</li>
              <li>Acquisition of data</li>
              <li>Analysis and interpretation of data</li>
              <li>Drafting or critical review of the manuscript</li>
              <li>Final approval and accountability for the work</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Corresponding Author Responsibilities</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ensure all co-authors have approved the final manuscript</li>
              <li>Handle communication with the editorial team</li>
              <li>Respond to reviewer comments and queries</li>
              <li>Ensure authorship information is accurate</li>
              <li>Declare any conflicts of interest</li>
              <li>Provide contact information for inquiries</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Acknowledging Contributions</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Non-author contributors should be listed in the Acknowledgments section</li>
              <li>Technical assistants, funding sources, and consultants should be recognized</li>
              <li>Funding sources must be disclosed</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "copyright",
      title: "Copyright and Accessibility",
      icon: Copyright,
      color: "primary",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Creative Commons License</h4>
            <p className="text-muted-foreground mb-4">
              All published papers in ICQTDBT 2026 proceedings are released under the Creative Commons Attribution License (CC BY 4.0).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">License Terms</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>CC BY 4.0:</strong> You are free to share and adapt the work, with proper attribution</li>
              <li>Others can use your work for commercial purposes</li>
              <li>Credit and license information must be included when reused</li>
              <li>Works must be in a human and machine-readable format</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Copyright Assignment</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>By submitting, authors retain copyright of their work</li>
              <li>ICQTDBT 2026 receives perpetual license for publication</li>
              <li>Authors may reuse their work in future publications with proper attribution</li>
              <li>Copyright holder remains the author unless otherwise agreed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Papers should be formatted to be accessible to people with disabilities</li>
              <li>Use descriptive alt text for figures and tables</li>
              <li>Ensure sufficient color contrast in visualizations</li>
              <li>Provide structured headings and readable formatting</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-center mb-4 gradient-text">
            Publishing Ethics and Malpractice Statement
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            ICQTDBT 2026 (International Conference on Quantum Technologies, Digital Business Transformation and Emerging Trends) is committed to maintaining the highest ethical standards in academic publishing. This comprehensive guide outlines our policies and expectations for authors, reviewers, and editors.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Download Author Guidelines Button */}
            <Card className="p-8 glass-card border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold gradient-text mb-2">Author Guidelines & Policies</h2>
                  <p className="text-muted-foreground">
                    Download our comprehensive author guidelines to ensure your submission meets all requirements and ethical standards.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow flex-shrink-0"
                  onClick={downloadFile}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Guidelines
                </Button>
              </div>
            </Card>

            {/* Expandable Sections */}
            <Card className="p-8 glass-card">
              <h2 className="text-3xl font-bold gradient-text mb-8">Publishing Requirements</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <AccordionItem key={section.id} value={section.id} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center space-x-3 text-left">
                          <div className={`w-10 h-10 rounded-lg bg-${section.color}/20 flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-5 h-5 text-${section.color}`} />
                          </div>
                          <span className="font-semibold text-base">{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <div className="ml-12">
                          {section.content}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Card>

            {/* Key Ethics Principles - Dark Card */}
            <Card className="p-8 glass-card bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700/50 text-white">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Key Ethics Commitments</h2>
                  <p className="text-white/80">
                    ICQTDBT 2026 is committed to the highest standards of research ethics and integrity.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Original Research</p>
                      <p className="text-sm text-white/70">Only unpublished original work is accepted</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Ethical Conduct</p>
                      <p className="text-sm text-white/70">All research must follow ethical guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Peer Review</p>
                      <p className="text-sm text-white/70">Fair and rigorous peer review process</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Transparency</p>
                      <p className="text-sm text-white/70">Clear disclosure of funding and conflicts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Accountability</p>
                      <p className="text-sm text-white/70">Authors accountable for research accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Open Access</p>
                      <p className="text-sm text-white/70">Published works available under CC BY 4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 glass-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold gradient-text mb-4">Ethics Inquiries and Complaints</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any concerns regarding research ethics, publication misconduct, or other ethics-related matters, 
                    please contact our editorial office:
                  </p>
                  <div className="bg-secondary/5 rounded-lg p-4 space-y-2">
                    <p className="text-foreground">
                      <span className="font-semibold">Email:</span> 
                      <a href="mailto:icqtdbt@paruluniversity.ac.in" className="text-secondary hover:underline ml-2 font-semibold">
                        icqtdbt@paruluniversity.ac.in
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      All complaints and inquiries will be handled confidentially and investigated thoroughly.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Notice */}
            <Card className="p-8 glass-card border-2 border-yellow-500/30 bg-yellow-50/5">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Important Notice</h3>
                  <p className="text-muted-foreground mb-3">
                    By submitting a manuscript to ICQTDBT 2026, all authors confirm that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>The work is original and has not been published elsewhere</li>
                    <li>All authors have agreed on authorship and order</li>
                    <li>The work complies with ethical standards and regulations</li>
                    <li>All conflicts of interest have been disclosed</li>
                    <li>The corresponding author is authorized to act on behalf of all co-authors</li>
                    <li>The manuscript will not be submitted elsewhere while under review</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* CTA Section */}
            <Card className="p-8 glass-card border-2 border-primary/50">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-2">Ready to Submit Your Paper?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Review our publishing ethics guidelines and submit your high-quality research contribution to ICQTDBT 2026. 
                    We look forward to advancing knowledge through ethical and transparent academic publishing.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/call-for-papers">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow w-full sm:w-auto"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Call for Papers
                    </Button>
                  </a>
                  <a href="mailto:icqtdbt@paruluniversity.ac.in">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Ethics Team
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishingEthics;
