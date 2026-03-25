import { Button } from "@/components/ui/button";
import { useScrollReveal } from "./useScrollReveal";

const cards = [
  {
    name: "Oro Banamex",
    tagline: "Meses sin interés para tu bienestar.",
    color: "from-amber-400 to-yellow-600",
  },
  {
    name: "Joy Banamex",
    tagline: "Sin anualidad, con más seguridad.",
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "LineUp Banamex",
    tagline: "La música te espera. ¿Te unes?",
    color: "from-rose-400 to-red-600",
  },
];

export default function CardShowcase() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 section-padding">
      <div className="container-banamex">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          El acceso a un mundo <span className="text-banamex-teal">de beneficios.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`text-center group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              {/* Card visual */}
              <div className={`w-48 h-32 mx-auto rounded-xl bg-gradient-to-br ${card.color} shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 flex items-end p-4 mb-5`}>
                <span className="text-xs font-semibold text-background/90 tracking-wide">{card.name}</span>
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">{card.name}</h3>
              <p className="text-base font-bold text-foreground mb-4 leading-snug">{card.tagline}</p>
              <Button variant="cta" size="sm">Solicítala</Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="cta-outline" size="lg">
            Conoce nuestras tarjetas
          </Button>
        </div>
      </div>
    </section>
  );
}
