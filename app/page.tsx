import AboutSection from "@/components/Aboutsection";
import Categories from "@/components/Category";
import Hero from "@/components/Hero";
import Image from "next/image";
import ContactPage from "../components/Contactpage";
import Footer from "@/components/Footer";

export default function Home() {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Anna Market",
    description:
      "Modern furniture, home decor, and kitchen essentials in Addis Ababa, Ethiopia. Curated lifestyle products for your home.",
    url: "https://anna-market.vercel.app",
    telephone: "+251913747191",
    priceRange: "50,000-400,000 Birr",
    image: "https://anna-market.vercel.app/images/furnitures.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wesen",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.005401,
      longitude: 38.763611,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://t.me/annahomes1",
      "https://t.me/annahomes1",
      "https://vm.tiktok.com/ZMDLsMbFJ/",
    ],
  };
  
  return (
    
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <main>
          <Hero />
          <Categories />
          <AboutSection />
          <ContactPage />
          <Footer />
        </main>
    </>
    
  );
  
}
