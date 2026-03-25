import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Pharmaceutical Science", hasDropdown: true },
  { label: "Dental and Oral Health", hasDropdown: true },
  { label: "Medical and Healthcare Practices", hasDropdown: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="container-banamex section-padding">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            {/*}
            <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
              <circle cx="16" cy="16" r="14" stroke="hsl(var(--banamex-red))" strokeWidth="2.5" />
              <circle cx="11" cy="13" r="3" fill="hsl(var(--banamex-red))" />
              <circle cx="21" cy="13" r="3" fill="hsl(var(--banamex-red))" />
              <circle cx="16" cy="21" r="3" fill="hsl(var(--banamex-red))" />
              <line x1="11" y1="13" x2="21" y2="13" stroke="hsl(var(--banamex-red))" strokeWidth="1.5" />
              <line x1="11" y1="13" x2="16" y2="21" stroke="hsl(var(--banamex-red))" strokeWidth="1.5" />
              <line x1="21" y1="13" x2="16" y2="21" stroke="hsl(var(--banamex-red))" strokeWidth="1.5" />
            </svg>
            */}
            <span className="text-xl font-bold text-foreground tracking-tight">Acquire Tax Credits</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors duration-150"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Buscar">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Ubicaciones">
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </button>
            {/* <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Hazte cliente
              <ChevronDown className="w-4 h-4 opacity-50" />
            </button>
            */}
            <Button variant="nav-cta" size="default" className="rounded-full">
              Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
                <ChevronDown className="w-4 h-4 opacity-50" />
              </button>
            ))}
            <div className="pt-2 px-4 space-y-2">
              <Button variant="nav-cta" className="w-full rounded-full">Services</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
