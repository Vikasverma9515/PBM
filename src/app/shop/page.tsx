// pages/index.tsx or app/page.tsx
import AboutUsSection from "@/components/about/AboutUsSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/header";
import InnovativeBrainSolutionsSection from "@/components/InnovativeBrainSolutionsSection";
import ConsultationSection from "@/components/shop/ConsultationSection";
import ProductGridSection from "@/components/shop/ProductGridSection";

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      {/* <AboutUsSection /> */}
      <Header />
      <InnovativeBrainSolutionsSection />
      <ProductGridSection />
      <ConsultationSection />
      <FooterSection />
    </main>
  );
}