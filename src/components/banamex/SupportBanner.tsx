import { Button } from "@/components/ui/button";
import { Phone, Shield, HelpCircle } from "lucide-react";
import supportAgent from "@/assets/support-agent.png";
import { useScrollReveal } from "./useScrollReveal";

export default function SupportBanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 section-padding">
      <div className="container-banamex">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Agent image */}
          <div className="shrink-0">
            <img
              src={supportAgent}
              alt="Agente de soporte"
              className="w-48 lg:w-64 rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Aquí. Para ti.
              <br />
              <span className="text-primary">Siempre.</span>
            </h2>
            <p className="text-muted-foreground mt-3 mb-6">
              Llámanos. Las 24 horas del día.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                55 1226 2639
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Tips de seguridad</p>
                <p className="text-xs text-muted-foreground">Protégete ante fraudes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
              <HelpCircle className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Centro de ayuda</p>
                <p className="text-xs text-muted-foreground">Resuelve tus dudas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
