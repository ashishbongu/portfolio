export default function About() {
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
            <div
              aria-hidden="true"
              className="aspect-[9/16] w-full rounded-2xl bg-black shadow-2xl"
            />
          </div>
        </div>
      </section>
    );
  }
