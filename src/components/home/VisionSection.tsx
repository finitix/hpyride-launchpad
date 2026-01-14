import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Handshake, Globe } from "lucide-react";

const visionPoints = [
  {
    icon: Car,
    title: "Connected Rides Across India",
    description: "Linking riders and drivers in Delhi, Mumbai, Bangalore, and 50+ cities.",
  },
  {
    icon: Handshake,
    title: "Community-Driven Mobility",
    description: "Building trust-based car pooling and driver pooling networks.",
  },
  {
    icon: Globe,
    title: "Sustainable Transportation",
    description: "Reducing emissions through shared rides and car pooling initiatives.",
  },
];

const VisionSection = () => {
  return (
    <section className="py-24 bg-secondary/30" aria-labelledby="vision-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold mb-6">
              HpyRide Vision — <span className="gradient-text">Driving India Forward</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At HpyRide, we're building India's most trusted platform for car pooling, ride sharing, and driver pooling. 
              Our goal is to make every journey safe, affordable, and joyful.
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
                  <point.icon className="w-10 h-10 text-white" aria-hidden="true" />
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

          {/* Internal Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/vision" 
              className="text-brand-pink hover:text-brand-purple transition-colors font-medium"
            >
              Learn More About Our Vision →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
