import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Shield, Leaf, Users, Heart, Globe, Zap } from "lucide-react";

const visionPillars = [
  {
    icon: Shield,
    title: "Safety for Every Journey",
    description:
      "Real-time GPS tracking, emergency SOS support, and verified drivers ensure you travel with complete peace of mind.",
    color: "from-brand-purple to-brand-pink",
  },
  {
    icon: Leaf,
    title: "Smart Sustainability",
    description:
      "Shared rides mean fewer vehicles on the road, reduced emissions, and a greener India for future generations.",
    color: "from-brand-pink to-brand-rose",
  },
  {
    icon: Users,
    title: "Empowering Drivers",
    description:
      "Fair income models, flexible schedules, and community support help drivers build sustainable livelihoods.",
    color: "from-brand-rose to-brand-purple",
  },
];

const values = [
  {
    icon: Heart,
    title: "Trust",
    description: "Building genuine connections between riders and drivers.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Mobility solutions for every Indian, everywhere.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly improving through technology and feedback.",
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
              Driven by Trust, Innovation, and{" "}
              <span className="gradient-text">Happiness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our vision is to transform how India travels — making every journey safe, affordable, and joyful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
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
              Our <span className="gradient-text">Vision Pillars</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three core principles that guide everything we build.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden h-full">
                  {/* Gradient Line at Top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Gradient Line */}
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
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that define who we are and how we work.
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
                  <value.icon className="w-10 h-10 text-white" />
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
      <section className="py-24 bg-background">
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  "To create India's most trusted mobility platform that connects 
                  millions of riders and drivers through technology, transparency, 
                  and shared purpose — making every journey a step towards a 
                  more connected and sustainable future."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
