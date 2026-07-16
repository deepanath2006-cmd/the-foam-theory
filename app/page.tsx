import CustomerReviews from "@/components/customer-reviews";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServicesPreview } from "@/components/services-preview";
import { PricingPreview } from "@/components/pricing-preview";
import { GalleryPreview } from "@/components/gallery-preview";
import { ContactPreview } from "@/components/contact-preview";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BookingProvider } from "@/components/booking-provider";
import { SHOW_PRICING_SECTION } from "@/lib/constants";
import About from "@/components/about";
export default function Home() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
  <Hero />

  <About />

  <ServicesPreview />

  {SHOW_PRICING_SECTION && <PricingPreview />}

  <GalleryPreview />

  <CustomerReviews />

  <ContactPreview />
</main>
      <Footer />
      <WhatsAppButton />
    </BookingProvider>
  );
}
