import Navbar from "@/components/voynich/Navbar";
import Hero from "@/components/voynich/Hero";
import Vehicles from "@/components/voynich/Vehicles";
import FeaturedVehicle from "@/components/voynich/FeaturedVehicle";
import Design from "@/components/voynich/Design";
import Technology from "@/components/voynich/Technology";
import Interior from "@/components/voynich/Interior";
import Performance from "@/components/voynich/Performance";
import Experience from "@/components/voynich/Experience";
import FinalCTA from "@/components/voynich/FinalCTA";
import Footer from "@/components/voynich/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Vehicles />
        <FeaturedVehicle />
        <Design />
        <Technology />
        <Interior />
        <Performance />
        <Experience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}