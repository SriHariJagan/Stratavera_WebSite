
import Hero from "../sections/Hero/Hero";
import AboutSection from "../sections/AboutSection/AboutSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
    </>
  );
}

export default Home;
