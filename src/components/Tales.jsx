import taleThumbnail from "../assets/Black White and Red Typographic Truth YouTube Thumbnail.png";

const videos = [
  {
    title: "Conversation with Mathew Bentley | Tale 1",
    duration: "21:27",
    image: taleThumbnail,
  },
  {
    title: "A student developer's day",
    duration: "12:16",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Learning, one project at a time",
    duration: "06:28",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Tales() {
  return (
    <main id="tales" className="min-h-screen bg-black px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[8px] text-neutral-500">Tales</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight text-white md:text-[5rem]">
            Stories worth <span className="italic text-[#4D6CFA]">watching.</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            A few videos from my journey—ideas, lessons, and the work behind the screen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="group">
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={video.image}
                  alt=""
                  className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-black/35 pl-0.5 text-sm text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-black">
                    ▶
                  </span>
                </span>
                <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs text-white">
                  {video.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{video.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
