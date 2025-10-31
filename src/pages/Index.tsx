import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AudienceSection from "@/components/AudienceSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AudienceSection />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
};

export default Index;
