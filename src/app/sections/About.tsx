import FadeIn from "../ui/FadeIn";
import AboutExperience from "./AboutExperience";
import { getSobrePhotos } from "../utils/photos";

export default function About() {
  const moments = getSobrePhotos();

  return (
    <section id="sobre" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <AboutExperience moments={moments} />
        </FadeIn>
      </div>
    </section>
  );
}
