import Hero from "./sections/Hero";
import PageTransition from "./Components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
}
