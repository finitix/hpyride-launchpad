import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import WhyHpyRideSection from "@/components/home/WhyHpyRideSection";
import ServicesSection from "@/components/home/ServicesSection";
import VisionSection from "@/components/home/VisionSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="HpyRide - India's #1 Car Pooling, Ride Sharing & Driver Pooling Platform"
        description="HpyRide is India's trusted car pooling and ride sharing platform. Book affordable rides, join driver pooling, rent cars across 50+ Indian cities. Safe, verified, budget-friendly mobility."
        keywords="hpyride, car pooling India, ride sharing India, driver pooling, ride booking app, car rental India, carpooling app, shared rides, HpyRide.com"
        canonicalUrl="https://hpyride.com/"
      />
      <HeroSection />
      <WhyHpyRideSection />
      <ServicesSection />
      <VisionSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
