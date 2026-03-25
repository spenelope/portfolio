import { Button } from "@/components/ui/button";
import beachCouple from "@/assets/beach-couple.jpg";
import lifestyleFriends from "@/assets/lifestyle-friends.jpg";
import familyHome from "@/assets/family-home.jpg";
import { useScrollReveal } from "./useScrollReveal";

const benefits = [
  {
    image: beachCouple,
    title: "¡Di sí a las vacaciones que deseas!",
    desc: "Obtén 10% de bonificación comprando desde 12 MSI* con tu Tarjeta de Crédito Banamex del 19 al 23 de marzo.",
    cta: "¡Regístrate!",
  },
  {
    image: lifestyleFriends,
    title: "Tu nómina en Banamex te hace decir \"guau\".",
    desc: "Con tu nómina tienes un paquete de asistencias que te protege a ti y a tu mascota.",
    cta: "Me interesa",
  },
  {
    image: familyHome,
    title: "¡Paga tus servicios a meses sin intereses!",
    desc: "Tú eliges cómo pagar el predial, agua, tenencia o refrendo con tu Tarjeta de Crédito Banamex.",
    cta: "Me interesa",
  },
];

export default function ClientBenefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 section-padding">
      <div className="container-banamex">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Ser cliente tiene sus ventajas.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <article
              key={i}
              className={`group rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-[box-shadow] duration-300 bg-background ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground leading-snug mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{b.desc}</p>
                <Button variant="cta" size="sm">
                  {b.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
