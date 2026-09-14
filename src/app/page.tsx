import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4E9DD]">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
