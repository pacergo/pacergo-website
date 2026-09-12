"use client";

import { ListChecks, SlidersHorizontal, Sparkles, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";

const ICONS = [Target, ListChecks, SlidersHorizontal];

/** How many of the four pips are filled per configuration row. */
const LEVELS = [3, 1, 2, 0];

type CoachItem = {
  title: string;
  body: string;
};

export function AiCoach() {
  const { t } = useTranslation("home");
  const items = t("ai_coach.items", { returnObjects: true }) as CoachItem[];
  const visualPoints = t("ai_coach.visual_points", { returnObjects: true }) as string[];

  return (
    <section id="ai-coach" className="relative scroll-mt-24 overflow-clip border-y border-ink/10 bg-white px-6 py-24 lg:py-32">
      <div className="absolute -right-[10%] -top-[15%] -z-10 size-[520px] rounded-full bg-brand/5 blur-[140px]" />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>{t("ai_coach.eyebrow")}</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.02]">
            {t("ai_coach.title_1")}
            <span className="text-brand">{t("ai_coach.title_highlight")}</span>
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/60">
            {t("ai_coach.intro")}
          </p>

          <div className="mt-9 grid gap-4">
            {items.map((item, index) => {
              const Icon = ICONS[index] ?? Sparkles;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="flex gap-4 rounded-2xl border border-ink/10 bg-paper p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/58">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="rounded-[2rem] border border-ink/10 bg-paper p-5 shadow-[0_36px_90px_-54px_rgba(10,10,10,0.5)]">
          <div className="rounded-[1.5rem] border border-ink/10 bg-white p-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-ink/45">
                  {t("ai_coach.visual_label")}
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">{t("ai_coach.visual_title")}</p>
              </div>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-paper">
                <Sparkles className="size-5" strokeWidth={1.8} />
              </span>
            </div>

            <div className="mt-8 grid gap-3">
              {visualPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-paper px-4 py-3.5"
                >
                  <span className="text-sm font-semibold text-ink">{point}</span>
                  <span className="flex gap-1" aria-hidden="true">
                    {[0, 1, 2, 3].map((pip) => (
                      <span
                        key={pip}
                        className={`size-1.5 rounded-full ${pip <= (LEVELS[index] ?? 1) ? "bg-brand" : "bg-ink/15"}`}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* the menu those inputs generate: warm-up, main block, cool-down */}
            <div className="mt-6 grid gap-2.5 rounded-xl border border-ink/10 bg-paper p-4" aria-hidden="true">
              {[0.45, 1, 0.6].map((width, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="h-2 rounded-full bg-ink/12" style={{ width: `${width * 100}%` }} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
