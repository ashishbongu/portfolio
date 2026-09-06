import { useRef, useState } from "react";
import portfolioVideo from "../assets/INTRO.mp4";

export default function About() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlayback = () => {
      if (!videoRef.current) return;

      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };

    const updateProgress = () => {
      const { currentTime, duration } = videoRef.current;
      setProgress(duration ? (currentTime / duration) * 100 : 0);
    };

    const seekVideo = (event) => {
      if (!videoRef.current?.duration) return;

      const nextProgress = Number(event.target.value);
      videoRef.current.currentTime = (nextProgress / 100) * videoRef.current.duration;
      setProgress(nextProgress);
    };

    return (
      <section
        id="about"
        className="flex min-h-screen items-center bg-white px-6 py-24 sm:py-28 lg:px-12"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-10">
          <div className="text-left">
            <p className="uppercase tracking-[8px] text-black">About</p>

            <h2 className="instrument-serif mt-8 text-[2.75rem] font-normal leading-[0.95] tracking-tight text-black sm:text-[3.5rem] md:text-[5rem]">
              I Judge a Book by its{" "}
              <span className="italic text-[#4D6CFA]">Cover</span>
            </h2>

            <p className="mt-8 text-left text-base leading-8 text-black sm:text-lg lg:text-justify">
            Hey! I'm Ashish. You can call me{" "}
            <a
              href="https://www.instagram.com/snaparos/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#4D6CFA] underline decoration-[#4D6CFA]/50 underline-offset-4 transition-colors hover:text-black"
            >
              Snaparos
            </a>
            . Hmm... never mind, call me Ashish only. I'm not very famous (not even in my class), but I'm someone who is deeply passionate about art. To tell you a little about myself, I'm a 21-year-old engineering student with multiple interests (except coding). I love photography, travelling, and storytelling and importantly, I love speaking to people and sharing their stories and life experiences.
            </p>
            <p className="mt-8 text-left text-base leading-8 text-black sm:text-lg lg:text-justify">
            Recently, I fell in love with content creation, through which I can reach a larger audience and I'm reaching out for genuine collaborations where I can showcase my skills. So, go through my website and take a glance at my work and if you genuinely like my content (I hope you will), Please contact me (details on top). That's it, Have a great day !!
            </p>
          </div>

          <div className="relative w-full max-w-md justify-self-center lg:max-w-[280px] lg:translate-y-8">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
              <video
                ref={videoRef}
                playsInline
                preload="metadata"
                className="aspect-[9/16] h-full w-full object-cover"
                aria-label="Portfolio video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={updateProgress}
              >
                <source src={portfolioVideo} type="video/mp4" />
              </video>

              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/85 to-transparent px-4 pb-4 pt-10">
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="flex shrink-0 items-center justify-center text-base leading-none text-white transition-opacity hover:opacity-70 focus:outline-none"
                  aria-label={isPlaying ? "Pause introduction video" : "Play introduction video"}
                >
                  {isPlaying ? "\u275a\u275a" : "\u25b6"}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={seekVideo}
                  aria-label="Video timeline"
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full accent-white"
                  style={{ background: `linear-gradient(to right, #ffffff ${progress}%, rgba(255, 255, 255, 0.35) ${progress}%)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
