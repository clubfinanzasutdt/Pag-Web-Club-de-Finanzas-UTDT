import { Handshake, TrendingUp, Users } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";

type WhyJoinSectionProps = {
  dictionary: Dictionary;
};

export default function WhyJoinSection({
  dictionary
}: WhyJoinSectionProps) {
  const icons = [TrendingUp, Handshake, Users];

  return (
    <section className="section-shell pt-0">
      <div className="site-container">
        <span className="section-eyebrow">{dictionary.whyJoin.eyebrow}</span>
        <h2 className="section-title">{dictionary.whyJoin.heading}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dictionary.whyJoin.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item} className="glass-card p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <Icon className="h-6 w-6 text-amber-300" />
                </div>
                <p className="text-lg font-medium leading-8 text-white">{item}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
