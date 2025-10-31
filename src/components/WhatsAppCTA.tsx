import { MessageCircle, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WHATSAPP_URL } from "@/utils/constants";
import { useExternalNav } from "@/utils/use-externNav";

const WhatsAppCTA = () => {
  const navigate = useExternalNav();
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 border-2 border-secondary/30 bg-card/95 backdrop-blur-sm shadow-whatsapp">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground mb-6 shadow-whatsapp">
              <MessageCircle className="w-10 h-10 fill-secondary-foreground" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Nigerian students using KAWE AI on WhatsApp. 
              It's <span className="font-bold text-primary">100% free</span> and takes just seconds to get started.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Save Our Number</h3>
              <p className="text-sm text-muted-foreground">Add KAWE AI to your WhatsApp contacts</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Send "Hi"</h3>
              <p className="text-sm text-muted-foreground">Start a conversation with KAWE</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Start Learning</h3>
              <p className="text-sm text-muted-foreground">Ask questions and upload documents</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:shadow-whatsapp text-xl px-12 py-8 h-auto transition-all hover:scale-105 font-bold border-2 border-secondary-foreground/20"
              onClick={() => navigate(WHATSAPP_URL)}
            >
              <MessageCircle className="w-7 h-7 mr-3 fill-secondary-foreground" />
              Open WhatsApp & Start Learning
              <Send className="w-5 h-5 ml-3" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              No registration required • Free forever • 3-hour memory storage
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
