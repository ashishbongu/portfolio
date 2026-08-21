export default function About() {
    return (
      <section
        id="about"
        className="flex min-h-screen items-center bg-white px-6 py-24 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
  
          <p className="uppercase tracking-[8px] text-black">
            About
          </p>
  
          <h2
            className="
            instrument-serif
            mt-8
            text-[2.75rem]
            sm:text-[3.5rem]
            md:text-[5rem]
            leading-[0.95]
            font-normal
            tracking-tight
            text-black"
            >
            I Judge a Book
            by its{" "}
            <span className="italic text-[#4D6CFA]">
                Cover
            </span>
            </h2>
  
          <p
            className="
            mt-8
            text-black
            text-base
            sm:text-lg
            leading-8
            text-left
            md:text-justify
            max-w-3xl"
          >
            Hey! I'm Ashish. You can call me{" "}
            <a
              href="https://www.instagram.com/snaparos/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#4D6CFA] underline decoration-[#4D6CFA]/50 underline-offset-4 transition-colors hover:text-black"
            >
              Snaparos
            </a>
            . Hmm... never mind, call me Ashish only. I'm not very famous (not even in my class), but I'm someone who is passionate about art. To tell you a little about myself, I'm a 21-year-old engineering student with multiple interests (except coding). I love photography, travelling, and storytelling. I also love speaking to people and sharing their stories and life experiences.
          </p>
          <br></br>
          <p className="mt-8 max-w-3xl text-left text-base leading-8 text-black sm:text-lg md:mt-0 md:text-justify">
            Recently, I fell in love with content creation, through which I can reach a larger audience. I'm reaching out for genuine collaborations where I can showcase my skills. So, go through my website and take a glance at my work and if you genuinely like my content (I hope you will), Please contact me (top right corner). That's it, I don't have anything else to tell.
          </p>
  
        </div>
      </section>
    );
  }
