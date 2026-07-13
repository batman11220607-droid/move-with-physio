import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutDoctor from "@/components/AboutDoctor";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contacts";
import Testimonials from "@/components/testimonials";
import FloatingButtons from "@/components/FloatingButtons";
import Treatments from "@/components/Treatments";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <AboutDoctor />
      <Services />
      <Treatments />
      <Gallery />
      <Testimonials />
      <Contact />
      <FloatingButtons />
      <Footer />
    </>
  );
}