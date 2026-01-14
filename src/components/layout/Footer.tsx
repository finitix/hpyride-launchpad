import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold gradient-text">HpyRide</span>
              <span className="text-2xl font-bold text-foreground">.Com</span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              India's All-in-One Mobility Platform
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-pink hover:bg-secondary/80 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 HpyRide.Com — Your journey, our happiness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
