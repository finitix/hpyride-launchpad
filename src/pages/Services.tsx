import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Car, CarFront, BadgeDollarSign, Users, MapPin, Clock, Shield, Star } from "lucide-react";

const services = [
  {
    id: "ride-sharing",
    icon: Car,
    title: "Ride Sharing",
    status: "active",
    description: "Find or offer rides with trusted users. Share your journey, split the cost, and travel together.",
    features: [
      { icon: MapPin, text: "Route-based matching" },
      { icon: Shield, text: "Verified profiles" },
      { icon: Clock, text: "Flexible scheduling" },
      { icon: Star, text: "Rating system" },
    ],
    cta: "Book or Offer Ride",
  },
  {
    id: "car-rental",
    icon: CarFront,
    title: "Car Rental",
    status: "coming-soon",
    description: "Rent verified cars hourly or daily. Drive your way, anywhere across India.",
    features: [
      { icon: Car, text: "Wide vehicle selection" },
      { icon: Shield, text: "Fully insured" },
      { icon: Clock, text: "Flexible durations" },
      { icon: MapPin, text: "Pan-India availability" },
    ],
    cta: "Coming Soon",
  },
  {
    id: "pre-owned",
    icon: BadgeDollarSign,
    title: "Pre-Owned Cars",
    status: "coming-soon",
    description: "Buy or sell verified used cars easily. Trusted deals, transparent pricing, happy drives.",
    features: [
      { icon: Shield, text: "Verified history" },
      { icon: Star, text: "Quality certified" },
      { icon: BadgeDollarSign, text: "Fair pricing" },
      { icon: Clock, text: "Quick transfer" },
    ],
    cta: "Coming Soon",
  },
  {
    id: "driver-pooling",
    icon: Users,
    title: "Driver Pooling",
    status: "coming-soon",
    description: "Collaborate with professional long-haul drivers. Shared routes, better income.",
    features: [
      { icon: Users, text: "Professional network" },
      { icon: MapPin, text: "Long-distance routes" },
      { icon: BadgeDollarSign, text: "Fair revenue sharing" },
      { icon: Shield, text: "Licensed drivers" },
    ],
    cta: "Coming Soon",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("ride-sharing");
  const activeService = services.find((s) => s.id === activeTab);

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
              All Your Mobility Needs,{" "}
              <span className="gradient-text">One Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From daily commutes to car ownership — we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground bg-secondary"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-brand rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <service.icon size={18} />
                  {service.title}
                  {service.status === "coming-soon" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">
                      Soon
                    </span>
                  )}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          activeService.status === "active"
                            ? "bg-gradient-brand"
                            : "bg-secondary"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <activeService.icon
                          className={`w-8 h-8 ${
                            activeService.status === "active"
                              ? "text-white"
                              : "text-muted-foreground"
                          }`}
                        />
                      </motion.div>
                      {activeService.status === "active" ? (
                        <span className="px-4 py-1.5 rounded-full bg-gradient-brand text-white text-sm font-medium">
                          Active Now
                        </span>
                      ) : (
                        <span className="px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {activeService.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {activeService.description}
                    </p>

                    {activeService.status === "active" ? (
                      <Button variant="gradient" size="lg">
                        {activeService.cta}
                      </Button>
                    ) : (
                      <Button variant="secondary" size="lg" disabled>
                        {activeService.cta}
                      </Button>
                    )}
                  </div>

                  {/* Right: Features */}
                  <div className="bg-secondary/50 rounded-3xl p-8">
                    <h3 className="text-lg font-semibold mb-6">Key Features</h3>
                    <div className="grid gap-4">
                      {activeService.features.map((feature, index) => (
                        <motion.div
                          key={feature.text}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-background rounded-xl"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* All Services Grid */}
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
              Complete <span className="gradient-text">Mobility Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One app for all your transportation needs — today and tomorrow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative bg-background rounded-2xl p-6 h-full transition-all duration-300 card-hover ${
                    service.status === "active"
                      ? "shadow-lg"
                      : "border border-border"
                  }`}
                >
                  {service.status === "active" && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-10" />
                  )}

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        service.status === "active"
                          ? "bg-gradient-brand"
                          : "bg-secondary"
                      }`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${
                          service.status === "active"
                            ? "text-white"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
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

export default Services;
