import { Check, Sparkles } from "lucide-react";

/* A text-free product frame for the hero: brand, ink and paper only, with the
   same hairline grid used behind the hero itself. Carries no copy, so it needs
   no translation keys — swap it for a real Web App screenshot when one lands. */

/** Relative bar heights for the week strip; `true` marks a completed day. */
const WEEK: Array<[height: number, done: boolean]> = [
  [34, true],
  [52, true],
  [28, false],
  [64, true],
  [44, false],
  [72, true],
  [38, false],
];

function SkeletonBar({ className }: { className: string }) {
  return <span className={`block rounded-full bg-ink/10 ${className}`} />;
}

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="animate-rise relative mx-auto w-full max-w-[520px] lg:justify-self-end"
      style={{ animationDelay: "260ms" }}
    >
      <div className="rounded-[2rem] border border-ink/10 bg-white p-4 shadow-[0_38px_90px_-48px_rgba(10,10,10,0.45)] sm:p-5">
        <div className="relative overflow-clip rounded-[1.5rem] border border-ink/10 bg-paper p-5">
          <div className="grid-texture absolute inset-0 opacity-70" />

          {/* header: brand mark + placeholder title lines */}
          <div className="relative flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-paper">
              <Sparkles className="size-5" strokeWidth={1.8} />
            </span>
            <div className="grid gap-2">
              <SkeletonBar className="h-2.5 w-28" />
              <SkeletonBar className="h-2 w-20 bg-ink/6" />
            </div>
          </div>

          {/* week strip — filled bars are completed sessions */}
          <div className="relative mt-7 flex h-[76px] items-end gap-2">
            {WEEK.map(([height, done], index) => (
              <span
                key={index}
                className={`flex-1 rounded-full ${done ? "bg-brand" : "bg-ink/10"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          {/* session rows */}
          <div className="relative mt-7 grid gap-3">
            {[0, 1, 2].map((row) => (
              <div
                key={row}
                className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-3"
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${
                    row === 0 ? "bg-brand/10 text-brand" : "bg-ink/5 text-ink/25"
                  }`}
                >
                  <Check className="size-4" strokeWidth={2.2} />
                </span>
                <div className="grid flex-1 gap-1.5">
                  <SkeletonBar className={row === 1 ? "h-2 w-2/3" : "h-2 w-1/2"} />
                  <SkeletonBar className="h-1.5 w-1/3 bg-ink/6" />
                </div>
              </div>
            ))}
          </div>

          {/* progress track */}
          <div className="relative mt-6 h-1.5 overflow-hidden rounded-full bg-ink/10">
            <span className="block h-full w-[68%] rounded-full bg-brand" />
          </div>
        </div>
      </div>
    </div>
  );
}
