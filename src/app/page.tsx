import About from "@/components/about";
import FoodBanks from "@/components/food-banks";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MiniGame from "@/components/mini-game";
import Navbar from "@/components/navbar";
import Recipes from "@/components/recipes";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MiniGame />
      <Recipes />
      <FoodBanks />
      <Footer />
    </main>
  );
}
