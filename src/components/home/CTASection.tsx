import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when HpyRide launches.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-brand opacity-95" />
      
      {/* Wave Pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>

      {/* Animated Car */}
      <motion.div
        className="absolute bottom-8 text-white/20"
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Car size={48} />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              We're Coming Soon!
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Join thousands waiting for the future of Indian mobility.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-6 rounded-xl bg-white/95 border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 rounded-xl bg-foreground text-white hover:bg-foreground/90 font-semibold whitespace-nowrap"
            >
              {isSubmitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  Joined!
                </span>
              ) : (
                "Notify Me"
              )}
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 text-sm mt-6"
          >
            No spam, just updates. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
