import { Button } from "@/components/ui/button";
import familyHome from "@/assets/family-home.jpg";
import { useScrollReveal } from "./useScrollReveal";

const creditProducts = [
  {
    title: "Simulador Crédito Hipotecario",
    desc: "Cambia tu historia hoy, simula tu crédito.",
    bullets: ["Simula tu crédito en línea y descubre cuánto podemos prestarte.", "Elige tus plazos a 10, 15 o 20 años"],
    cta: "Conócelo",
  },
  {
    title: "Crédito Hipotecario Banamex",
    desc: "Haz realidad el hogar que imaginas.",
    bullets: ["¡Abre las puertas a un futuro brillante!"],
    cta: "Conoce más",
  },
  {
    title: "Crédito Nómina Banamex",
    desc: "Dinero cuando lo necesitas, sin complicaciones.",
    bullets: ["Solicita desde $2,000 hasta $1,500,000."],
    cta: "Me interesa",
  },
];

export default function CreditsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-banamex-light-gray section-padding">
      <div className="container-banamex">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Un crédito <span className="text-banamex-teal">para cada necesidad.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main card with image */}
          <div
            className={`lg:row-span-2 rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] bg-background ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <img src={familyHome} alt="Crédito Hipotecario" className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{creditProducts[0].title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{creditProducts[0].desc}</p>
              <ul className="space-y-2 mb-5">
                {creditProducts[0].bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="sm">{creditProducts[0].cta}</Button>
            </div>
          </div>

          {/* Side cards */}
          {creditProducts.slice(1).map((p, i) => (
            <div
              key={i}
              className={`rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] bg-background p-6 flex flex-col justify-between ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                <ul className="space-y-2 mb-5">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="cta" size="sm" className="self-start">{p.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
