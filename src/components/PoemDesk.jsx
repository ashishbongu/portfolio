import poemPlaceholder from "../assets/6.png";

// Replace these entries with imports for your poem artwork when it is ready.
const poemPages = Array.from({ length: 6 }, (_, index) => ({
  src: poemPlaceholder,
  alt: `Poem placeholder ${index + 1}`,
  label: `Poem ${String(index + 1).padStart(2, "0")}`,
}));

export default function PoemDesk() {
  return (
    <main id="poem-desk" className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[8px] text-neutral-500">Poem Desk</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h1 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight md:text-[5rem]">
            A desk full of <span className="italic text-[#4D6CFA]">feelings.</span>
          </h1>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            Six spaces for poems, notes, and the words worth keeping.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {poemPages.map((poem) => (
            <figure key={poem.label} className="overflow-hidden bg-neutral-900">
              <img src={poem.src} alt={poem.alt} className="block h-auto w-full" />
              <figcaption className="px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">{poem.label}</span>
                <p className="mt-1 text-xs text-neutral-400">Replace with your poem image</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
