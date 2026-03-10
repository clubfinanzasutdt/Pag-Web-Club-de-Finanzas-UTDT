import { Dictionary } from "@/lib/dictionaries";

type CredibilityStripProps = {
  dictionary: Dictionary;
};

export default function CredibilityStrip({
  dictionary
}: CredibilityStripProps) {
  const colors = [
    "text-brandOrange",
    "text-brandCyan",
    "text-brandMagenta",
    "text-brandOrange",
    "text-brandCyan"
  ];

  return (
    <section className="border-y border-zinc-800/60 bg-black/50">
      <div className="site-container grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
        {dictionary.credibility.items.map((item, index) => (
          <div key={item.label} className="text-center lg:text-left">
            <div className={`text-2xl font-bold ${colors[index]}`}>{item.value}</div>
            <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
