import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Instagram, Twitter, Youtube, CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "HpyRide LinkedIn", color: "hover:text-[#0077B5]" },
  { icon: Instagram, href: "#", label: "HpyRide Instagram", color: "hover:text-[#E4405F]" },
  { icon: Twitter, href: "#", label: "HpyRide Twitter", color: "hover:text-foreground" },
  { icon: Youtube, href: "#", label: "HpyRide YouTube", color: "hover:text-[#FF0000]" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <SEO
        title="Contact HpyRide - Car Pooling & Ride Sharing Support India"
        description="Get in touch with HpyRide for car pooling, ride sharing, driver pooling inquiries. Customer support, partnerships, and feedback. We respond within 24 hours."
        keywords="contact hpyride, hpyride support, car pooling help, ride sharing contact, hpyride customer service, hpyride email"
        canonicalUrl="https://hpyride.com/contact"
      />
      {/* Hero Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">HpyRide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Questions about car pooling, ride sharing, or driver pooling? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background" aria-labelledby="contact-form">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="contact-form" className="text-2xl md:text-3xl font-bold mb-8">
                Send <span className="gradient-text">HpyRide</span> a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ask about car pooling, ride booking, driver pooling, or partnerships..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      Message Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                <span className="gradient-text">HpyRide</span> Contact Info
              </h2>

              {/* Email Card */}
              <motion.div
                className="bg-secondary/50 rounded-2xl p-6 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email us at</p>
                    <a
                      href="mailto:support@hpyride.com"
                      className="text-lg font-semibold text-foreground hover:text-brand-pink transition-colors"
                    >
                      support@hpyride.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                className="bg-secondary/50 rounded-2xl p-6 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <p className="text-lg font-semibold text-foreground">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="bg-secondary/50 rounded-2xl p-6 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                    <p className="text-lg font-semibold text-foreground">
                      India (Pan-India Service)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Follow HpyRide</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-3 rounded-xl bg-background text-muted-foreground ${social.color} transition-all shadow-sm hover:shadow-md`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Explore <span className="gradient-text">HpyRide</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              ← Back to Home
            </Link>
            <Link to="/about" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Our Services
            </Link>
            <Link to="/vision" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Our Vision
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
