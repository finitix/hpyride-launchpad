import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Shield, Leaf, Users, Heart, Globe, Zap } from "lucide-react";

const visionPillars = [
  {
    icon: Shield,
    title: "Safe Car Pooling for Every Journey",
    description:
      "Real-time GPS tracking, emergency SOS support, and 100% verified drivers ensure you travel with complete peace of mind on every HpyRide.",
    color: "from-brand-purple to-brand-pink",
  },
  {
    icon: Leaf,
    title: "Sustainable Ride Sharing",
    description:
      "Every shared ride means fewer vehicles, reduced emissions, and cleaner air for Indian cities. Join the green mobility revolution.",
    color: "from-brand-pink to-brand-rose",
  },
  {
    icon: Users,
    title: "Empowering Indian Drivers",
    description:
      "Fair income models and driver pooling opportunities help professional drivers build sustainable livelihoods across India.",
    color: "from-brand-rose to-brand-purple",
  },
];

const values = [
  {
    icon: Heart,
    title: "Trust & Safety",
    description: "Building genuine connections between riders and verified drivers.",
  },
  {
    icon: Globe,
    title: "Pan-India Accessibility",
    description: "Car pooling and ride booking solutions for every Indian city.",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    description: "Improving our ride sharing platform through technology and feedback.",
  },
];

const Vision = () => {
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
              <span className="gradient-text">HpyRide</span> Vision — Driving India Forward
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our vision is to transform Indian mobility — making car pooling, ride sharing, and driver pooling safe, affordable, and joyful for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-24 bg-background" aria-labelledby="vision-pillars">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="vision-pillars" className="text-3xl md:text-4xl font-bold mb-4">
              HpyRide <span className="gradient-text">Vision Pillars</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three core principles guiding India's car pooling and ride sharing revolution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden h-full">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`}
                  />

                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <pillar.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <motion.div
              className="w-full max-w-3xl h-1 bg-gradient-brand rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary/30" aria-labelledby="core-values">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="core-values" className="text-3xl md:text-4xl font-bold mb-4">
              HpyRide Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that define how we build India's best car pooling platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-10 h-10 text-white" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background" aria-labelledby="mission-statement">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-brand rounded-3xl p-1">
              <div className="bg-background rounded-[22px] p-12 text-center">
                <h2 id="mission-statement" className="text-2xl md:text-3xl font-bold mb-6">
                  The <span className="gradient-text">HpyRide</span> Mission
                </h2>
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  "To create India's most trusted platform for car pooling, ride sharing, and driver pooling 
                  that connects millions of riders and drivers through technology, transparency, 
                  and shared purpose — making every journey safer, greener, and more affordable."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Learn More About <span className="gradient-text">HpyRide</span>
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
            <Link to="/contact" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
