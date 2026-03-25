import { Button } from "@/components/ui/button";
import image02 from "@/assets/image02.jpg";
import image03 from "@/assets/image03.jpg";
import image04 from "@/assets/image04.jpg";
import { useScrollReveal } from "./useScrollReveal";

const benefits = [
  {
    image: image02,
    title: "Pharmaceutical Science",
    desc: "Drug development, formulation, compounding, specialized pharmaceuticals, clinical research operations, process optimization, and medical device design and evaluation.",
    cta: "Learn More",
  },
  {
    image: image03,
    title: "Dental and Oral Health",
    desc: "Multi location dental service organizations, oral and maxillofacial surgery, periodontics, implant care, orthodontics, prosthodontics, endodontics.",
    cta: "Learn More",
  },
  {
    image: image04,
    title: "Medical and Healthcare Practices",
    desc: "Surgical centers, specialty clinics, regenerative medicine, biologics, diagnostic and treatment protocol development, and practice innovation.",
    cta: "Learn More",
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
          Experience Across Research-Driven Industries.
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
