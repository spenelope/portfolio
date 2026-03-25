import { Button } from "@/components/ui/button";
import { CreditCard, Landmark, Shield, Calculator } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const helpItems = [
  { icon: Calculator, label: "" },
  { icon: Landmark, label: "" },
  { icon: Shield, label: "" },
  { icon: CreditCard, label: "" },
];

export default function HelpSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-primary section-padding">
      <div className="container-banamex">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-primary-foreground mb-8 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Strategic Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {helpItems.map((item, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.97] group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              <item.icon className="w-7 h-7 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors" />
              <span className="text-sm font-medium text-primary-foreground/90 text-center leading-snug">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
