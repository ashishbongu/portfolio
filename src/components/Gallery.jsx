const photoModules = import.meta.glob(
  "../assets/galPhotosOptimized/*.jpg",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const photos = Object.entries(photoModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true }),
  )
  .map(([, src], index) => ({ src, alt: `Gallery photograph ${index + 1}` }));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[8px] text-neutral-500">Gallery</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight text-white md:text-[5rem]">
            Moments I&apos;ve <span className="italic text-[#4D6CFA]">captured.</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            A selection of photographs from along the way.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className="overflow-hidden bg-neutral-900 transition duration-500 ease-out hover:-translate-y-2 hover:rotate-2 hover:scale-[1.02]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-400">Explore more on</p>
          <a
            href="https://www.instagram.com/snaparos/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D6CFA]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            snaparos
          </a>
        </div>
      </div>
    </main>
  );
}
