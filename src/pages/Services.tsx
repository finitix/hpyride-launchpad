import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Car, CarFront, BadgeDollarSign, Users, MapPin, Clock, Shield, Star, ChevronDown, ChevronUp } from "lucide-react";
import rideBookingImg from "@/assets/ride-booking.jpg";
import carRentalImg from "@/assets/car-rental.jpg";
import driverPoolingImg from "@/assets/driver-pooling.jpg";

const services = [
  {
    id: "ride-sharing",
    icon: Car,
    title: "Ride Sharing & Car Pooling",
    status: "active",
    description: "HpyRide's car pooling service connects you with verified riders and drivers on your route. Share rides, split costs, and reduce traffic across Indian cities.",
    features: [
      { icon: MapPin, text: "Route-based matching for efficient car pooling" },
      { icon: Shield, text: "100% verified driver profiles" },
      { icon: Clock, text: "Flexible ride booking schedules" },
      { icon: Star, text: "User rating and review system" },
    ],
    cta: "Join Car Pooling",
    image: rideBookingImg,
  },
  {
    id: "car-rental",
    icon: CarFront,
    title: "Car Rental Services",
    status: "coming-soon",
    description: "Rent verified cars hourly or daily across all major Indian cities. Self-drive or chauffeur-driven options for business and leisure travel.",
    features: [
      { icon: Car, text: "Wide selection of rental vehicles" },
      { icon: Shield, text: "Fully insured car rentals" },
      { icon: Clock, text: "Hourly, daily, weekly rentals" },
      { icon: MapPin, text: "Available in 50+ Indian cities" },
    ],
    cta: "Coming Soon",
    image: carRentalImg,
  },
  {
    id: "pre-owned",
    icon: BadgeDollarSign,
    title: "Pre-Owned Car Marketplace",
    status: "coming-soon",
    description: "Buy or sell verified used cars on HpyRide's trusted marketplace. Complete documentation, fair pricing, and hassle-free transfers.",
    features: [
      { icon: Shield, text: "Verified vehicle history" },
      { icon: Star, text: "Quality certified cars" },
      { icon: BadgeDollarSign, text: "Transparent pricing" },
      { icon: Clock, text: "Quick ownership transfer" },
    ],
    cta: "Coming Soon",
    image: null,
  },
  {
    id: "driver-pooling",
    icon: Users,
    title: "Driver Pooling Network",
    status: "coming-soon",
    description: "Professional driver pooling for long-distance routes. Licensed drivers collaborate for better income and reliable intercity travel.",
    features: [
      { icon: Users, text: "Professional driver network" },
      { icon: MapPin, text: "Long-distance route coverage" },
      { icon: BadgeDollarSign, text: "Fair revenue sharing model" },
      { icon: Shield, text: "Licensed and verified drivers" },
    ],
    cta: "Coming Soon",
    image: driverPoolingImg,
  },
];

const faqs = [
  {
    question: "What is car pooling and how does HpyRide work?",
    answer: "Car pooling (also called carpooling or ride sharing) is sharing a car journey with others traveling on the same route. HpyRide connects riders and drivers through our app, matching you with verified users for safe, affordable shared rides across India."
  },
  {
    question: "Is ride sharing on HpyRide safe?",
    answer: "Yes! HpyRide prioritizes safety with 100% driver verification, real-time GPS tracking, emergency SOS features, and user ratings. All drivers undergo background checks before joining our driver pooling network."
  },
  {
    question: "Which cities does HpyRide operate in?",
    answer: "HpyRide is launching across 50+ major Indian cities including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, and more. Our ride booking and car pooling services expand to new cities regularly."
  },
  {
    question: "How much can I save with car pooling?",
    answer: "HpyRide users save up to 60% on daily commute costs compared to private cabs or ride-hailing. Car pooling splits fuel and toll costs among passengers, making it the most affordable ride sharing option in India."
  },
  {
    question: "How do I book a ride on HpyRide?",
    answer: "Download the HpyRide app, create an account, enter your pickup and destination, and find available car pooling or ride sharing options. You can also offer rides if you're driving and want to share costs."
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("ride-sharing");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <Layout>
      <SEO
        title="HpyRide Services - Car Pooling, Ride Sharing, Driver Pooling & Car Rental India"
        description="Explore HpyRide's mobility services: car pooling, ride sharing, driver pooling network, and car rental across 50+ Indian cities. Safe, affordable transportation solutions."
        keywords="hpyride services, car pooling service India, ride sharing app, driver pooling network, car rental India, ride booking service"
        canonicalUrl="https://hpyride.com/services"
      />
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
              <span className="gradient-text">HpyRide</span> Mobility Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Complete car pooling, ride sharing, driver pooling, and car rental solutions for India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-24 bg-background" aria-labelledby="services-detail">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="services-detail" className="sr-only">HpyRide Service Details</h2>
          
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
                  <service.icon size={18} aria-hidden="true" />
                  {service.title.split(" ")[0]}
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
                          aria-hidden="true"
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

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {activeService.title}
                    </h3>
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

                  {/* Right: Image + Features */}
                  <div className="space-y-6">
                    {activeService.image && (
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={activeService.image}
                          alt={`${activeService.title} - HpyRide India`}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    <div className="bg-secondary/50 rounded-3xl p-6">
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <div className="grid gap-3">
                        {activeService.features.map((feature, index) => (
                          <motion.div
                            key={feature.text}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-background rounded-xl"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-4 h-4 text-white" aria-hidden="true" />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {feature.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions About <span className="gradient-text">HpyRide</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about car pooling, ride sharing, and ride booking in India.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-pink flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Explore More About <span className="gradient-text">HpyRide</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              ← Back to Home
            </Link>
            <Link to="/about" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              About HpyRide
            </Link>
            <Link to="/vision" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Our Vision
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

export default Services;
