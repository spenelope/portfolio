import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Productos",
    links: ["Tarjetas de Crédito", "Cuentas de Débito", "Créditos", "Seguros", "Inversiones"],
  },
  {
    title: "Servicios",
    links: ["App Banamex", "BancaNet", "Estado de cuenta", "Notificaciones"],
  },
  {
    title: "Ayuda",
    links: ["Centro de Ayuda", "Ayuda Urgente", "Teléfonos", "Centro de Seguridad"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-banamex-dark text-primary-foreground">
      <div className="container-banamex section-padding py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
                <circle cx="16" cy="16" r="14" stroke="hsl(var(--banamex-red))" strokeWidth="2.5" />
                <circle cx="11" cy="13" r="3" fill="hsl(var(--banamex-red))" />
                <circle cx="21" cy="13" r="3" fill="hsl(var(--banamex-red))" />
                <circle cx="16" cy="21" r="3" fill="hsl(var(--banamex-red))" />
              </svg>
              <span className="text-lg font-bold">Banamex</span>
            </div>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 55 1226 2639
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contacto@banamex.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Av. Insurgentes Sur 926, CDMX
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Banco Nacional de México, S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
