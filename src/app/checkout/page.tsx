// app/checkout/page.tsx
// import CheckoutPage from '@/components/checkout/CheckoutPage';
import CheckoutPage from '@/components/checkout/CheckoutPage';
import Header from '@/components/header';

export default function Checkout() {
  return (
    <main>
      <Header />
      <CheckoutPage />
    </main>
  );
}