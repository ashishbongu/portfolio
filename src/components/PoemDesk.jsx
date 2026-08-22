import poemTwo from "../assets/2.png";
import poemFour from "../assets/4.png";
import poemSix from "../assets/6.png";

const poemPages = [
  { src: poemTwo, alt: "Poem 2", label: "Dogama of Life" },
  { src: poemFour, alt: "Poem 4", label: "The Rising Hope" },
  { src: poemSix, alt: "Poem 6", label: "My Dream girl" },
];

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
            Top picks from my poem collection.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {poemPages.map((poem, index) => (
            <figure key={poem.label} className="overflow-hidden bg-neutral-900">
              <img
                src={poem.src}
                alt={poem.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="block h-auto w-full"
              />
              <figcaption className="px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">{poem.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-400">Explore more on</p>
          <a
            href="https://www.writco.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D6CFA]"
          >
            Writco / ashi2005
          </a>
        </div>
      </div>
    </main>
  );
}
