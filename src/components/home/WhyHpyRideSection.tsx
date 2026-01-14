import { motion } from "framer-motion";
import { Shield, Wallet, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Real-time GPS tracking, emergency SOS, and verified drivers for every journey.",
    color: "from-brand-purple to-brand-pink",
  },
  {
    icon: Wallet,
    title: "Affordable Rides",
    description: "Pay less, share more. Smart pricing that fits every pocket.",
    color: "from-brand-pink to-brand-rose",
  },
  {
    icon: Heart,
    title: "Made for India",
    description: "Designed for every city, every route, every Indian traveler.",
    color: "from-brand-rose to-brand-purple",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const WhyHpyRideSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">HpyRide</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're redefining mobility in India with safety, affordability, and innovation at our core.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHpyRideSection;
