import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Chart from "./components/Chart";
import Features from "./components/Features";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-gray-600">
      <Navbar />
      <Hero />
      <Companies />
      <Chart />
      <Features />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
