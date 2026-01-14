import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyHpyRideSection from "@/components/home/WhyHpyRideSection";
import ServicesSection from "@/components/home/ServicesSection";
import VisionSection from "@/components/home/VisionSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyHpyRideSection />
      <ServicesSection />
      <VisionSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
