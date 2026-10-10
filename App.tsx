import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
