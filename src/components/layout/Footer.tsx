import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Youtube, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Account Deletion", path: "/account-deletion" },
  { name: "Refund Policy", path: "/refund-policy" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative bg-background pt-16 pb-8">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold gradient-text">HpyRide</span>
              <span className="text-2xl font-bold text-foreground">.Com</span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left mb-4">
              India's All-in-One Mobility Platform
            </p>
            {/* WhatsApp CTA */}
            <Button variant="gradient" size="sm" asChild className="gap-2">
              <a 
                href="https://wa.me/918897611021" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-brand-pink transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-brand-pink transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:hpyrideindia@gmail.com" className="hover:text-brand-pink transition-colors">
                  hpyrideindia@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} />
                <a href="https://wa.me/918897611021" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">
                  +91 88976 11021
                </a>
              </p>
            </div>
            <h4 className="font-semibold text-foreground mb-3 mt-2">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-pink hover:bg-secondary/80 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 HpyRide.Com — Your journey, our happiness.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Grievance: hpyride.dcgroup@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
