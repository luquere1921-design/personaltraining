import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Services } from "@/components/landing/Services";
import { Results } from "@/components/landing/Results";
import { WhyMe } from "@/components/landing/WhyMe";
import { Process } from "@/components/landing/Process";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Alex Performance — Entrenador Personal Premium",
  image: "https://alex-performance.com/og.jpg",
  telephone: "+34600000000",
  email: "hola@alex-performance.com",
  address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
  areaServed: ["Madrid", "España", "Online global"],
  priceRange: "€€€",
  description:
    "Entrenador personal premium en Madrid. Coaching 1:1, transformación corporal y rendimiento para profesionales y ejecutivos.",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
  makesOffer: [
    { "@type": "Offer", name: "Starter", price: "149", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Performance", price: "349", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Elite Transformation", price: "799", priceCurrency: "EUR" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entrenador Personal Premium en Madrid | Alex Performance" },
      {
        name: "description",
        content:
          "Entrenador personal premium en Madrid y online. Transformación corporal, coaching 1:1 y resultados medibles para profesionales. Reserva tu diagnóstico gratuito.",
      },
      { name: "keywords", content: "personal trainer madrid, entrenador personal online, body transformation, coaching premium fitness" },
      { property: "og:title", content: "Alex Performance — Entrenador Personal Premium" },
      { property: "og:description", content: "Transforma tu cuerpo. Domina tu disciplina. Coaching 1:1 para profesionales exigentes." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alex Performance — Entrenador Personal Premium" },
      { name: "twitter:description", content: "Coaching 1:1 premium. Resultados medibles. Reserva tu diagnóstico gratuito." },
    ],
    links: [{ rel: "canonical", href: "https://alex-performance.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Results />
        <WhyMe />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
