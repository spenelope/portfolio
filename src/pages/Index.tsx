import Navbar from "@/components/acquire/Navbar";
import HeroCarousel from "@/components/acquire/HeroCarousel";
// import CreditCardsPromo from "@/components/acquire/Promo";
import ProductsGrid from "@/components/acquire/ProductsGrid";
import ClientBenefits from "@/components/acquire/Benefits";
import CreditsSection from "@/components/acquire/Section";
// import CardShowcase from "@/components/acquire/Showcase";
import HelpSection from "@/components/acquire/HelpSection";
import SupportBanner from "@/components/acquire/SupportBanner";
// import Footer from "@/components/acquire/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      {/* <CreditCardsPromo /> */}
      <ProductsGrid />
      <ClientBenefits />
      <CreditsSection />
      {/* <CardShowcase /> */}
      <HelpSection />
      <SupportBanner />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
