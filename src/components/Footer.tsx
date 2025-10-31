import { MessageCircle, Mail, ExternalLink } from "lucide-react";
import kaweLogo from "@/assets/kawe-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={kaweLogo} 
                alt="KAWE AI Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KAWE AI
              </h3>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Your free AI-powered study buddy on WhatsApp. Making quality education accessible 
              to every Nigerian student.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
          
          {/* About KAWE */}
          <div>
            <h4 className="text-lg font-bold mb-4">About KAWE</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Supported Formats
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Exquitec */}
          <div>
            <h4 className="text-lg font-bold mb-4">Powered By</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-secondary mb-1">
                  Exquitec Education Technology
                </h5>
                <p className="text-sm text-background/70">
                  Innovating educational solutions for African students
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-accent mb-1">
                  Exquitec Empowerment Network
                </h5>
                <p className="text-sm text-background/70">
                  Empowering communities through technology and education
                </p>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                Visit Exquitec
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2025 KAWE AI - A Project of Exquitec. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
