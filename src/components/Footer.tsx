import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t-4 border-[#222] pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/assets/logo.png" alt="ICMASAI 2026 Logo" width={250}
              height={125} className="object-contain"/>
            </div>
            <p className="text-muted-foreground text-sm">
              International Conference on Multi-Agent Systems in Artificial Intelligence 2026, bringing together researchers, 
              academics, and industry experts from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/call-for-papers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/venue" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Venue Information
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                 Parul University, PO Limda, Vadodara, Gujarat 391760, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">+91 123 456 6789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">phdtest@gmail.comm</p>
              </div>
              <div className="flex items-center space-x-3">
                {/* Contact time */}
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">Mon - Fri: 9:00AM - 5:00PM</div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4">Stay Connected</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="https://www.facebook.com/ParulUniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border flex items-center justify-center hover:bg-gray-100 text-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ParulUniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border flex items-center justify-center hover:bg-gray-100 text-black transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/Paruluniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border flex items-center justify-center hover:bg-gray-100 text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCeXQgKg0qhTKbNRi5hpIL9A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border flex items-center justify-center hover:bg-gray-100 text-black transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/paruluniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border flex items-center justify-center hover:bg-gray-100 text-black transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white sketch-border focus:outline-none min-w-0"
              />
              <button className="sketch-button text-sm whitespace-nowrap text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 ICMASAI International Conference. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mb-4 md:mb-0 flex items-center flex-wrap">
              Designed & Developed by: 
              <a href="https://www.linkedin.com/in/amit-srivastava108/" target="_blank" rel="noopener noreferrer" className="flex items-center ml-1 hover:text-primary transition-colors group">
                <span className="font-bold mr-1 group-hover:underline">Amit Srivastava</span>
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </a>
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;