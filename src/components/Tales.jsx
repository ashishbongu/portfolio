import { useState } from "react";
import taleThumbnail from "../assets/Black White and Red Typographic Truth YouTube Thumbnail.png";

const videos = [
  {
    title: "Conversation with Mathew Bentley",
    duration: "21:27",
    image: taleThumbnail,
    youtubeId: "K3jil977xZg",
  },
];

export default function Tales() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main id="tales" className="min-h-screen bg-black px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[8px] text-neutral-500">Tales</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight text-white md:text-[5rem]">
            Stories worth <span className="italic text-[#4D6CFA]">watching.</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            A few Conversations along my journey
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
                <button
                  type="button"
                  aria-label={video.youtubeId ? `Play ${video.title}` : undefined}
                  onClick={() => video.youtubeId && setActiveVideo(video.youtubeId)}
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-black/35 pl-0.5 text-sm text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-black">
                    ▶
                  </span>
                </button>
                <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs text-white">
                  {video.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{video.title}</h3>
            </article>
          ))}
          <article className="flex min-h-56 flex-col justify-end border border-dashed border-white/20 p-6 sm:p-7 md:col-span-2">
            <h3 className="instrument-serif mt-4 text-4xl leading-none text-white sm:text-[2.75rem]">More on the way.</h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
              New conversations, lessons, and stories.
            </p>
          </article>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
        <p className="text-sm text-neutral-400">Explore more on</p>
          <a
            href="https://www.instagram.com/taleswrap/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D6CFA]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mr-2 h-4 w-4">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            taleswrap
          </a>
          <a
            href="https://www.youtube.com/@taleswrap"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D6CFA]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4">
              <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM10 15.2V8.8l5.5 3.2L10 15.2Z" />
            </svg>
            taleswrap
          </a>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
              className="absolute -right-2 -top-11 grid h-9 w-9 place-items-center rounded-full border border-white/30 text-xl text-white transition hover:bg-white hover:text-black"
            >
              ×
            </button>
            <div className="aspect-video overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
                title="Conversation with Mathew Bentley"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
