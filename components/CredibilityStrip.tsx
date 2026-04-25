import { Dictionary } from "@/lib/dictionaries";

type CredibilityStripProps = {
  dictionary: Dictionary;
};

export default function CredibilityStrip({
  dictionary
}: CredibilityStripProps) {
  const colors = [
    "border-brandOrange/35",
    "border-brandCyan/35",
    "border-brandMagenta/35",
    "border-brandOrange/35",
    "border-brandCyan/35"
  ];

  return (
    <section className="border-b border-line bg-surface/55">
      <div className="site-container grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-5">
        {dictionary.credibility.items.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-lg border-l-2 bg-background/35 px-4 py-3 text-left ${colors[index]}`}
          >
            <div className="text-xl font-semibold text-white">{item.value}</div>
            <div className="mt-1 text-xs uppercase text-zinc-500">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
