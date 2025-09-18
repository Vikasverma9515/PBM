// pages/contact.tsx or app/contact/page.tsx
import ContactSection from '@/components/contact/ContactSection';
import Header from '@/components/header';
import FooterSection from '@/components/FooterSection';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactSection />
      <FooterSection />
    </main>
  );
}