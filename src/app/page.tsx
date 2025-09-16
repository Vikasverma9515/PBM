import HeroSection from '../components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import InnovativeSection from '@/components/InnovativeSection';
import NeuroPro2Section from '@/components/NeuroPro2Section';
import InnovativeBrainSolutionsSection from '@/components/InnovativeBrainSolutionsSection';
import EnhancingBrainHealthSection from '@/components/EnhancingBrainHealthSection';
import CustomerTestimonialsSection from '@/components/CustomerTestimonialsSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import VielightBenefitsSection from '@/components/VielightBenefitsSection';
import FAQSection from '@/components/Faq';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <InnovativeSection />
      <NeuroPro2Section />
      <InnovativeBrainSolutionsSection />
      <EnhancingBrainHealthSection />
      <CustomerTestimonialsSection />
      <ProductShowcaseSection />
       <VielightBenefitsSection />
       <FAQSection />
       <FooterSection />
    </main>
  );
}