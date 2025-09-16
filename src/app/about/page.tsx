// pages/index.tsx or app/page.tsx
import AboutUsSection from "@/components/about/AboutUsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <AboutUsSection />
      <FooterSection />
    </main>
  );
}