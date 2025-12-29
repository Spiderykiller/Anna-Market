import AboutSection from "@/components/Aboutsection";
import Categories from "@/components/Category";
import Hero from "@/components/Hero";
import Image from "next/image";
import ContactPage from "../components/Contactpage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <AboutSection />
      <ContactPage />
      <Footer />
    </main>
  );
}
