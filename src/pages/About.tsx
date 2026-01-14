import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Linkedin, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-ride-sharing.jpg";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Amit Patel",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Neha Gupta",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About HpyRide - India's Leading Car Pooling & Ride Sharing Company"
        description="Learn about HpyRide, India's emerging leader in car pooling, ride sharing, and driver pooling. Meet our team building safer, smarter transportation for millions of Indians."
        keywords="about hpyride, hpyride company, car pooling India company, ride sharing startup, hpyride team, Indian mobility startup"
        canonicalUrl="https://hpyride.com/about"
      />
      {/* SEO Meta via document head would be here in a real SSR app */}
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="HpyRide team building India's best car pooling platform"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">HpyRide</span> — India's Car Pooling Pioneer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Building a connected, safe, and affordable ride sharing ecosystem for every Indian traveler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background" aria-labelledby="who-we-are">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="who-we-are" className="text-3xl md:text-4xl font-bold mb-6">
                Who is <span className="gradient-text">HpyRide</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                HpyRide is India's emerging leader in <strong>car pooling</strong>, <strong>ride sharing</strong>, 
                and <strong>driver pooling</strong> services. We blend technology and trust to create 
                safer, smarter, and more affordable transportation options.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our platform connects millions of Indian commuters with verified drivers for daily 
                <strong> ride booking</strong>, intercity travel, and <strong>car rental</strong> needs.
              </p>
              
              {/* Internal Links */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services" 
                  className="text-brand-pink hover:text-brand-purple transition-colors font-medium"
                >
                  Explore Our Services →
                </Link>
                <Link 
                  to="/vision" 
                  className="text-brand-pink hover:text-brand-purple transition-colors font-medium"
                >
                  Our Vision →
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-brand rounded-3xl p-1">
                <div className="bg-background rounded-[22px] p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold gradient-text">10K+</p>
                      <p className="text-muted-foreground">Early Signups</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold gradient-text">50+</p>
                      <p className="text-muted-foreground">Indian Cities</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold gradient-text">100%</p>
                      <p className="text-muted-foreground">Verified Drivers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold gradient-text">24/7</p>
                      <p className="text-muted-foreground">Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-secondary/30" aria-labelledby="our-story">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 id="our-story" className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="gradient-text">HpyRide</span> Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded to solve India's transportation challenges, HpyRide started with a simple 
              mission: make <strong>car pooling</strong> and <strong>ride sharing</strong> accessible, 
              affordable, and safe for every Indian. From Delhi to Chennai, Mumbai to Kolkata — 
              we're building the future of <strong>driver pooling</strong> and <strong>ride booking</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every journey on HpyRide reduces traffic congestion, lowers carbon emissions, 
              and creates economic opportunities for drivers across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-background" aria-labelledby="our-team">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="our-team" className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">HpyRide Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate experts working to transform Indian mobility through innovation and trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-background rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover text-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-100 -z-10 blur-sm transition-opacity duration-300" />
                  <div className="absolute inset-[2px] rounded-[14px] bg-background -z-[5]" />
                  
                  <div className="relative z-10">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role} at HpyRide`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-3">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-pink transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-pink transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience <span className="gradient-text">HpyRide</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of Indians choosing smarter, safer car pooling and ride sharing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              ← Back to Home
            </Link>
            <Link to="/contact" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
