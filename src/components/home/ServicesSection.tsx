import { motion } from "framer-motion";
import { Car, CarFront, BadgeDollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Ride Sharing",
    description: "Find or offer rides with trusted users. Share your journey, split the cost.",
    status: "active",
    cta: "Explore Now",
  },
  {
    icon: CarFront,
    title: "Car Rental",
    description: "Rent verified cars hourly or daily. Drive your way, anywhere.",
    status: "coming-soon",
    cta: "Coming Soon",
  },
  {
    icon: BadgeDollarSign,
    title: "Pre-Owned Cars",
    description: "Buy or sell verified used cars easily. Trusted deals, happy drives.",
    status: "coming-soon",
    cta: "Coming Soon",
  },
  {
    icon: Users,
    title: "Driver Pooling",
    description: "Collaborate with long-haul drivers. Professional drivers, shared routes.",
    status: "coming-soon",
    cta: "Coming Soon",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  return (
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
            Our <span className="gradient-text">Mobility Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One platform, multiple ways to travel. Choose what suits your journey best.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative bg-background rounded-2xl p-8 border-2 transition-all duration-300 overflow-hidden ${
                  service.status === "active"
                    ? "border-transparent shadow-lg hover:shadow-2xl"
                    : "border-border hover:border-brand-pink/30"
                }`}
              >
                {/* Active Service Glow */}
                {service.status === "active" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-brand opacity-5" />
                    <div className="absolute -inset-px bg-gradient-brand rounded-2xl -z-10" />
                    <div className="absolute inset-[1px] bg-background rounded-[14px]" />
                  </>
                )}

                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${
                        service.status === "active"
                          ? "bg-gradient-brand"
                          : "bg-secondary"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon
                        className={`w-7 h-7 ${
                          service.status === "active"
                            ? "text-white"
                            : "text-muted-foreground"
                        }`}
                      />
                    </motion.div>

                    {service.status === "active" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      service.status === "active"
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mb-6 leading-relaxed ${
                      service.status === "active"
                        ? "text-muted-foreground"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* CTA */}
                  {service.status === "active" ? (
                    <Button variant="gradient" size="default">
                      {service.cta}
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="default"
                      disabled
                      className="cursor-not-allowed"
                    >
                      {service.cta}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
