import { Button } from "@/components/ui/button";
import image05 from "@/assets/image05.jpg";
import image06 from "@/assets/image06.jpg";
import image07 from "@/assets/image07.jpg";
import image08 from "@/assets/image08.jpg";
import { useScrollReveal } from "./useScrollReveal.ts";

type Product = {
  image: any;
  label: string;
  cta: string;
  highlight?: string;
  sublabel?: string;
  desc?: string;
};

const products: Product[] = [
  {
    image: image05,
    label: " R&D TaxOps",
    // sublabel: "Banamex",
    // desc: "Lista en minutos. Abre tu cuenta desde tu celular.",
    cta: "Learn More",
  },
  {
    image: image06,
    label: "Industries",
    // desc: "Asegura cada rincón con 10% de descuento y MSI.*",
    cta: "Learn More",
  },
  {
    image: image07,
    label: "Compliance",
   // desc: "Elige la tarjeta que te dará acceso a beneficios y promociones.",
    cta: "Learn More  ",
    // highlight: "Learn More",
  },
  {
    image: image08,
    label: "Our Role",
    // sublabel: "LineUp Banamex",
    // desc: "¡Compra tus boletos antes que nadie con las Preventas LineUp!",
    cta: "Learn More",
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
          
          {/* Services.
          */}
          <br />
          <span className="text-banamex-teal">Services</span>
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
