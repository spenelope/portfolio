import { Button } from "@/components/ui/button";
import cardsFan from "@/assets/cards-fan.png";
import { useScrollReveal } from "./useScrollReveal";

export default function CreditCardsPromo() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-20 section-padding">
      <div className="container-banamex">
        <div
          className={`relative bg-banamex-teal-light rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Content */}
          <div className="p-8 lg:p-12 flex-1">
            <span className="inline-block text-sm font-semibold text-foreground mb-2 bg-background rounded-full px-4 py-1.5 shadow-sm">
              Tarjetas de Crédito
            </span>
            <p className="text-foreground text-lg mt-4 leading-relaxed">
              Solicita tu tarjeta y aprovecha
              <br />
              las 120 horas de promos.
            </p>
            <Button variant="cta" size="lg" className="mt-6">
              Quiero mi tarjeta
            </Button>
          </div>

          {/* Cards image */}
          <div className="flex-1 flex justify-center pb-8 lg:pb-0 lg:pr-8">
            <img
              src={cardsFan}
              alt="Tarjetas de crédito Banamex"
              className="w-64 lg:w-80 object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
