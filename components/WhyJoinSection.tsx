import { Handshake, TrendingUp, Users } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";

type WhyJoinSectionProps = {
  dictionary: Dictionary;
};

export default function WhyJoinSection({
  dictionary
}: WhyJoinSectionProps) {
  const cardStyles = [
    { icon: TrendingUp, color: "text-brandOrange", bg: "bg-brandOrange/10", border: "border-brandOrange/20" },
    { icon: Handshake, color: "text-brandCyan", bg: "bg-brandCyan/10", border: "border-brandCyan/20" },
    { icon: Users, color: "text-brandMagenta", bg: "bg-brandMagenta/10", border: "border-brandMagenta/20" }
  ];

  return (
    <section className="section-shell pt-0">
      <div className="site-container">
        <span className="section-eyebrow">{dictionary.whyJoin.eyebrow}</span>
        <h2 className="section-title">{dictionary.whyJoin.heading}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dictionary.whyJoin.items.map((item, index) => {
            const { icon: Icon, color, bg, border } = cardStyles[index];

            return (
              <article key={item} className={`glass-card p-7 border ${border} hover:border-opacity-40 transition-colors`}>
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
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
