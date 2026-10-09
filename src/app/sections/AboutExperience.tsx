"use client";

import HandwrittenLine from "../ui/HandwrittenLine";
import TrajectoryCarousel from "./TrajectoryCarousel";
import type { TrajectoryMoment } from "../utils/photos";
import { siteConfig } from "@/config/site";

type AboutExperienceProps = {
  moments: TrajectoryMoment[];
};

export default function AboutExperience({ moments }: AboutExperienceProps) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 xl:gap-14">
      <div className="min-w-0">
        <TrajectoryCarousel moments={moments} />
      </div>

      <div className="flex w-full flex-col justify-center lg:pl-1 xl:pl-2">
        <h2 className="text-[clamp(1.6rem,3.1vw,2.4rem)] text-[var(--color-foreground)]">
          <span className="sr-only">Prazer, sou Taynan Azevedo.</span>
          <span
            className="inline-flex max-w-full flex-wrap items-baseline justify-start gap-x-[0.2em] gap-y-1"
            aria-hidden="true"
          >
            <span className="font-display shrink-0 font-medium leading-none tracking-[-0.02em]">
              Prazer,
            </span>
            <HandwrittenLine text="sou Taynan Azevedo." className="min-w-0" />
          </span>
        </h2>

        <div className="mt-5 max-w-md space-y-4 md:mt-6 md:space-y-5">
          {siteConfig.aboutParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-pretty text-left font-display text-[1.05rem] leading-7 text-[var(--color-muted)] md:text-[1.12rem] md:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-7 border-t border-[var(--color-border)]/80 pt-5 md:mt-8">
          <p className="font-display text-lg font-semibold tracking-[0.02em] text-[var(--color-foreground)] md:text-xl">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">
            Psicóloga
            <span className="mx-2 text-[var(--color-accent)]" aria-hidden="true">
              •
            </span>
            CRP {siteConfig.crp}
          </p>
        </div>
      </div>
    </div>
  );
}
