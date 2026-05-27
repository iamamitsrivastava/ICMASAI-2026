'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { conferenceConfig } from "@/config/conferenceConfig";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
            Contact & Information
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Connect with the ICQTDBT 2026 organizing committee and explore conference details
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about the conference? We're here to help. Contact our organizing committee for any inquiries.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border shadow-lg">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">Conference Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">General Queries</h4>
                      <p className="text-muted-foreground">{conferenceConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">{conferenceConfig.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground">
                        {conferenceConfig.venue.name}<br />
                        {conferenceConfig.venue.address}<br />
                        {conferenceConfig.venue.city}, {conferenceConfig.venue.state}<br />
                        {conferenceConfig.venue.country} - {conferenceConfig.venue.pincode}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border shadow-lg">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">Key Contacts</h3>
                <div className="space-y-4">
                  {conferenceConfig.committee.organizingChair.map((chair, index) => (
                    <div key={index} className="border-b border-border/50 pb-4 last:border-0">
                      <h4 className="font-semibold">{chair.name}</h4>
                      <p className="text-sm text-muted-foreground">{chair.title}</p>
                      <p className="text-sm text-muted-foreground">{chair.organization}</p>
                      {chair.email && (
                        <p className="text-sm text-primary">{chair.email}</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;