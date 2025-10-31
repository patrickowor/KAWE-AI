import { Users, GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const AudienceSection = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Students",
      description: "Get instant help with homework, understand complex topics, and prepare for exams with a personal AI tutor available 24/7 on WhatsApp.",
      benefits: [
        "Homework assistance anytime",
        "Concept clarification",
        "Exam preparation support",
        "Learn at your own pace"
      ],
      gradient: "from-primary to-primary/80"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Parents",
      description: "Support your child's education journey with KAWE. Monitor progress, get learning insights, and ensure quality education outside school hours.",
      benefits: [
        "Track learning progress",
        "Quality educational support",
        "Cost-effective tutoring",
        "Peace of mind"
      ],
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Teachers",
      description: "Enhance your teaching with KAWE as a supplementary tool. Assign resources, monitor student engagement, and extend learning beyond the classroom.",
      benefits: [
        "Supplement classroom teaching",
        "Assign learning resources",
        "Student engagement insights",
        "Extended learning hours"
      ],
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section id="audience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who Benefits from KAWE?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the entire education ecosystem in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card bg-card"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${audience.gradient}`}
              />

              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${audience.gradient} text-primary-foreground mb-6 shadow-glow`}
                >
                  {audience.icon}
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {audience.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>

                <div className="space-y-3">
                  {audience.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${audience.gradient} mt-2 flex-shrink-0`}
                      />
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
