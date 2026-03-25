import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCards from "@/assets/hero-cards.png";
import beachCouple from "@/assets/beach-couple.jpg";

const slides = [
  {
    id: 1,
    badge: "Haz match con tu tarjeta de crédito ideal",
    title: "¡Solicita tu tarjeta\ny di sí a las promos\nde 120 horas!",
    cta: "Solicítala",
    image: heroCards,
    promoTag: "120 horas",
  },
  {
    id: 2,
    badge: "Promoción especial",
    title: "¡Di sí a las vacaciones\nque quieres!",
    subtitle: "Paga a meses y gana una bonificación por tus compras.",
    cta: "Regístrate ahora",
    image: beachCouple,
    stat: { value: "10%", desc: "de bonificación en\ncompras a partir de", highlight: "12 MSI*" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-primary min-h-[420px] lg:min-h-[480px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-700"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
      </div>

      <div className="relative container-banamex section-padding flex items-center min-h-[420px] lg:min-h-[480px]">
        <div className="max-w-xl py-12 lg:py-16">
          {slide.badge && (
            <p className="text-primary-foreground/80 text-sm font-medium mb-3 animate-fade-in-up">
              {slide.badge}
            </p>
          )}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.1] mb-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-primary-foreground/85 text-base lg:text-lg mb-6 max-w-md">
              {slide.subtitle}
            </p>
          )}
          <Button variant="cta" size="lg">
            {slide.cta}
          </Button>

          {slide.stat && (
            <div className="mt-8 flex items-center gap-3 text-primary-foreground/90">
              <span className="text-4xl font-extrabold text-primary-foreground">{slide.stat.value}</span>
              <span className="text-sm leading-snug whitespace-pre-line">
                {slide.stat.desc}
                <br />
                <strong className="text-primary-foreground">{slide.stat.highlight}</strong>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/40 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/40 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 right-8 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
