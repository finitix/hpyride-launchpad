import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Linkedin, Twitter } from "lucide-react";

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
              The Future of Indian Mobility{" "}
              <span className="gradient-text">Begins Here</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Building a connected, safe, and joyful transportation ecosystem for every Indian.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                HpyRide is built to make daily travel safer, smarter, and more connected. 
                We blend technology and trust to empower riders and drivers alike.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform brings together ride sharing, car rentals, and driver pooling 
                into one seamless experience — designed specifically for the unique needs 
                of Indian travelers.
              </p>
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
                      <p className="text-muted-foreground">Cities Planned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold gradient-text">100%</p>
                      <p className="text-muted-foreground">Safety Focus</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold gradient-text">24/7</p>
                      <p className="text-muted-foreground">Support Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded to solve India's mobility challenges, we aim to create a 
              community-driven ecosystem for efficient transportation. Born from 
              the frustration of unreliable rides and the vision of a connected India, 
              HpyRide is more than an app — it's a movement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every journey should be safe, affordable, and joyful. 
              That's why we're building technology that brings people together, 
              reduces costs, and creates opportunities for millions of drivers 
              and travelers across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals working together to transform Indian mobility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-background rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover text-center">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-100 -z-10 blur-sm transition-opacity duration-300" />
                  <div className="absolute inset-[2px] rounded-[14px] bg-background -z-[5]" />
                  
                  <div className="relative z-10">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
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
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-pink transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
