import { motion } from "framer-motion";
import { Car, Handshake, Globe } from "lucide-react";

const visionPoints = [
  {
    icon: Car,
    title: "Connected Rides",
    description: "Seamlessly linking riders and drivers across India.",
  },
  {
    icon: Handshake,
    title: "Community Impact",
    description: "Building trust-based transportation networks.",
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description: "Reducing emissions through shared mobility.",
  },
];

const VisionSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision — <span className="gradient-text">Driving India Forward</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At HpyRide, we believe mobility should be joyful, safe, and accessible for everyone.
              Our goal is to connect riders and drivers through trust, innovation, and empathy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <point.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
