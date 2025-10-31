import { MessageCircle, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";
// import kaweLogo from "@/assets/kawe-logo.jpg";
import kaweLogo from "@/assets/kawe-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(62, 113, 163, 0.75) 0%, rgba(53, 87, 121, 0.7) 100%), url(${heroImage})`,
          // backgroundImage: `linear-gradient(135deg, rgba(21, 94, 165, 0.75) 0%, rgba(21, 94, 165, 0.70) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        {/* <div className="mb-6 absolute">
          <img
            src={kaweLogo}
            alt="KAWE AI Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 drop-shadow-2xl"
          />
        </div> */}

        {/* WhatsApp Badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-secondary/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border-2 border-secondary-foreground/20 shadow-whatsapp">
          <MessageCircle className="w-5 h-5 text-secondary-foreground fill-secondary-foreground" />
          <span className="text-sm font-bold text-secondary-foreground">
            Available on WhatsApp
          </span>
          <Sparkles className="w-4 h-4 text-secondary-foreground" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Meet KAWE AI
          <br />
          <span className="text-primary-foreground/95">
            Your WhatsApp Study Buddy
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          AI-powered tutoring right in your{" "}
          <span className="font-bold text-secondary-foreground">WhatsApp</span>.
          Supporting 25+ document formats, OCR, and speech processing. Built for
          Nigerian students to excel outside the classroom.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:shadow-whatsapp text-lg px-10 py-7 h-auto transition-all hover:scale-105 font-bold border-2 border-secondary-foreground/20"
          >
            <MessageCircle className="w-6 h-6 mr-2 fill-secondary-foreground" />
            Chat on WhatsApp Now
            <Send className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-7 h-auto transition-all"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
          <div className="text-center">
            <div className="text-3xl font-bold">25+</div>
            <div className="text-sm">Document Formats</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm">Free Forever</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">3hrs</div>
            <div className="text-sm">Memory Storage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
