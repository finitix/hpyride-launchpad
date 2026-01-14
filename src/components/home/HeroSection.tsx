import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Route, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Icons */}
        <motion.div
          className="absolute top-[20%] left-[10%] text-brand-purple/20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Car size={60} />
        </motion.div>
        <motion.div
          className="absolute top-[30%] right-[15%] text-brand-pink/20"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <MapPin size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[20%] text-brand-rose/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Route size={44} />
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] right-[10%] text-brand-purple/20"
          animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <Users size={56} />
        </motion.div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                India's Mobility Revolution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Ride, Rent, and Drive Together —{" "}
              <span className="gradient-text">Welcome to HpyRide</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              India's all-in-one mobility platform for safe, affordable, and joyful travel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Get Early Access
              </Button>
              <Button variant="gradientOutline" size="xl">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Illustration Card */}
              <motion.div
                className="relative bg-gradient-to-br from-secondary to-background rounded-3xl p-8 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* City Scene SVG */}
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* Sky */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4C1D95" />
                      <stop offset="50%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#F43F5E" />
                    </linearGradient>
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background */}
                  <rect width="400" height="300" fill="url(#skyGradient)" rx="16" />
                  
                  {/* Buildings */}
                  <rect x="20" y="100" width="50" height="140" fill="#cbd5e1" rx="4" />
                  <rect x="80" y="60" width="40" height="180" fill="#94a3b8" rx="4" />
                  <rect x="130" y="80" width="60" height="160" fill="#e2e8f0" rx="4" />
                  <rect x="200" y="50" width="45" height="190" fill="#cbd5e1" rx="4" />
                  <rect x="255" y="90" width="55" height="150" fill="#94a3b8" rx="4" />
                  <rect x="320" y="70" width="50" height="170" fill="#e2e8f0" rx="4" />
                  
                  {/* Windows */}
                  {[30, 45].map((x) => [110, 130, 150, 170, 190, 210].map((y) => (
                    <rect key={`${x}-${y}`} x={x} y={y} width="10" height="8" fill="#fff" rx="1" />
                  )))}
                  
                  {/* Road */}
                  <rect x="0" y="240" width="400" height="60" fill="url(#roadGradient)" />
                  
                  {/* Road Lines */}
                  <rect x="40" y="268" width="40" height="4" fill="#fbbf24" rx="2" />
                  <rect x="120" y="268" width="40" height="4" fill="#fbbf24" rx="2" />
                  <rect x="200" y="268" width="40" height="4" fill="#fbbf24" rx="2" />
                  <rect x="280" y="268" width="40" height="4" fill="#fbbf24" rx="2" />
                  
                  {/* Car */}
                  <g transform="translate(140, 250)">
                    <rect x="0" y="10" width="80" height="25" fill="url(#carGradient)" rx="8" />
                    <rect x="10" y="0" width="60" height="20" fill="url(#carGradient)" rx="6" />
                    <rect x="15" y="3" width="22" height="14" fill="#e2e8f0" rx="3" opacity="0.8" />
                    <rect x="42" y="3" width="22" height="14" fill="#e2e8f0" rx="3" opacity="0.8" />
                    <circle cx="18" cy="38" r="8" fill="#1e293b" />
                    <circle cx="18" cy="38" r="4" fill="#64748b" />
                    <circle cx="62" cy="38" r="8" fill="#1e293b" />
                    <circle cx="62" cy="38" r="4" fill="#64748b" />
                  </g>
                  
                  {/* Sun */}
                  <circle cx="350" cy="40" r="25" fill="#fbbf24" opacity="0.6" />
                  
                  {/* People Icons */}
                  <g transform="translate(50, 215)">
                    <circle cx="8" cy="5" r="5" fill="#4C1D95" />
                    <rect x="3" y="12" width="10" height="15" fill="#4C1D95" rx="3" />
                  </g>
                  <g transform="translate(300, 215)">
                    <circle cx="8" cy="5" r="5" fill="#EC4899" />
                    <rect x="3" y="12" width="10" height="15" fill="#EC4899" rx="3" />
                  </g>
                </svg>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-background rounded-2xl p-3 shadow-lg"
                  animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center">
                      <Users size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">10K+</p>
                      <p className="text-[10px] text-muted-foreground">Waiting</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Route Badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-3 shadow-lg"
                  animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center">
                      <Route size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Safe Rides</p>
                      <p className="text-[10px] text-muted-foreground">GPS Tracked</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
