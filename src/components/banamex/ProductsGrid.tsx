import { Button } from "@/components/ui/button";
import lifestyleFriends from "@/assets/lifestyle-friends.jpg";
import familyHome from "@/assets/family-home.jpg";
import heroCards from "@/assets/hero-cards.png";
import beachCouple from "@/assets/beach-couple.jpg";
import { useScrollReveal } from "./useScrollReveal";

const products = [
  {
    image: lifestyleFriends,
    label: "Cuenta Switch",
    sublabel: "Banamex",
    desc: "Lista en minutos. Abre tu cuenta desde tu celular.",
    cta: "Descubre Switch",
  },
  {
    image: familyHome,
    label: "Seguro de Casa BNMX",
    desc: "Asegura cada rincón con 10% de descuento y MSI.*",
    cta: "Cotizar mi seguro",
  },
  {
    image: heroCards,
    label: "Tarjetas de Crédito Banamex",
    desc: "Elige la tarjeta que te dará acceso a beneficios y promociones.",
    cta: "Quiero mi tarjeta",
    highlight: "¡Solicítala ahora!",
  },
  {
    image: beachCouple,
    label: "Tarjeta de Crédito",
    sublabel: "LineUp Banamex",
    desc: "¡Compra tus boletos antes que nadie con las Preventas LineUp!",
    cta: "Solicítala",
  },
];

export default function ProductsGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-banamex-light-gray section-padding">
      <div className="container-banamex">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 leading-tight ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Hazlo a tu ritmo, en tu momento.
          <br />
          <span className="text-banamex-teal">¡Solicítalos en línea!</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <article
              key={i}
              className={`group bg-background rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-[box-shadow] duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                {p.highlight && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {p.highlight}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground leading-snug">
                  {p.label}
                  {p.sublabel && <span className="block text-primary">{p.sublabel}</span>}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.desc}</p>
                <Button variant="cta" size="sm" className="mt-4 text-xs">
                  {p.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
