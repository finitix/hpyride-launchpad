import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, CarFront, BadgeDollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import rideBookingImg from "@/assets/ride-booking.jpg";
import carRentalImg from "@/assets/car-rental.jpg";
import driverPoolingImg from "@/assets/driver-pooling.jpg";
import preOwnedCarsImg from "@/assets/pre-owned-cars.jpg";

const services = [
  {
    icon: Car,
    title: "Ride Sharing & Car Pooling",
    description: "Share rides with verified users on your route. Split costs, reduce traffic, and travel comfortably across Indian cities.",
    status: "active",
    cta: "Explore Now",
    image: rideBookingImg,
    alt: "Ride sharing and car pooling service in India - HpyRide",
  },
  {
    icon: CarFront,
    title: "Car Rental India",
    description: "Rent verified cars hourly or daily. Self-drive or with driver options available in all major cities.",
    status: "coming-soon",
    cta: "Coming Soon",
    image: carRentalImg,
    alt: "Car rental service in India - HpyRide",
  },
  {
    icon: BadgeDollarSign,
    title: "Pre-Owned Cars Marketplace",
    description: "Buy or sell verified used cars easily. Transparent pricing, complete documentation, and trusted deals.",
    status: "coming-soon",
    cta: "Coming Soon",
    image: preOwnedCarsImg,
    alt: "Pre-owned cars marketplace in India - HpyRide verified used cars",
  },
  {
    icon: Users,
    title: "Driver Pooling Network",
    description: "Professional drivers collaborate for long-distance routes. Better income for drivers, reliable rides for passengers.",
    status: "coming-soon",
    cta: "Coming Soon",
    image: driverPoolingImg,
    alt: "Driver pooling network in India - HpyRide professional drivers",
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
    <section className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">
            HpyRide <span className="gradient-text">Mobility Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete ride booking, car pooling, driver pooling, and car rental solutions for India.
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
            <motion.article
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative bg-background rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  service.status === "active"
                    ? "border-transparent shadow-lg hover:shadow-2xl"
                    : "border-border hover:border-brand-pink/30"
                }`}
              >
                {/* Image */}
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                )}

                {service.status === "active" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-brand opacity-5" />
                    <div className="absolute -inset-px bg-gradient-brand rounded-2xl -z-10" />
                  </>
                )}

                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                        service.status === "active"
                          ? "bg-gradient-brand"
                          : "bg-secondary"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon
                        className={`w-6 h-6 ${
                          service.status === "active"
                            ? "text-white"
                            : "text-muted-foreground"
                        }`}
                        aria-hidden="true"
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

                  {service.status === "active" ? (
                    <Button variant="gradient" size="default" asChild>
                      <Link to="/services">{service.cta}</Link>
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
            </motion.article>
          ))}
        </motion.div>

        {/* Internal Link to Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/services" 
            className="text-brand-pink hover:text-brand-purple transition-colors font-medium"
          >
            View All HpyRide Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
