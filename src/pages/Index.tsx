import Navbar from "@/components/banamex/Navbar";
import HeroCarousel from "@/components/banamex/HeroCarousel";
import CreditCardsPromo from "@/components/banamex/CreditCardsPromo";
import ProductsGrid from "@/components/banamex/ProductsGrid";
import ClientBenefits from "@/components/banamex/ClientBenefits";
import CreditsSection from "@/components/banamex/CreditsSection";
import CardShowcase from "@/components/banamex/CardShowcase";
import HelpSection from "@/components/banamex/HelpSection";
import SupportBanner from "@/components/banamex/SupportBanner";
import Footer from "@/components/banamex/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <CreditCardsPromo />
      <ProductsGrid />
      <ClientBenefits />
      <CreditsSection />
      <CardShowcase />
      <HelpSection />
      <SupportBanner />
      <Footer />
    </div>
  );
};

export default Index;
