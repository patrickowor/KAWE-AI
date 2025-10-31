import { Bot, FileText, Mic, Globe, Database, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import chatImage from "@/assets/feature-chat.png";
import ocrImage from "@/assets/feature-ocr.png";
import speechImage from "@/assets/feature-speech.png";

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "WhatsApp Integration",
      description: "Chat naturally with KAWE on WhatsApp - the platform you already use every day. No app downloads needed!",
      image: chatImage,
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "25+ Document Formats",
      description: "Upload PDFs, images, Word docs, and more. KAWE understands them all with advanced OCR.",
      image: ocrImage,
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Speech Processing",
      description: "Speak your questions or get audio responses. Learn the way that works best for you.",
      image: speechImage,
      gradient: "from-accent to-accent/80"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Search",
      description: "Share URLs and KAWE fetches and processes the content to help you learn.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Integration",
      description: "Connect to third-party databases and APIs for comprehensive learning resources.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Pedagogical Approach",
      description: "KAWE doesn't just answer - it teaches, using proven educational methods.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Better Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in your studies, powered by advanced AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                {feature.image && (
                  <div className="mb-4 rounded-lg overflow-hidden h-48">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-primary-foreground mb-4 shadow-glow`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
