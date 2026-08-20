export default function About() {
    return (
      <section
        id="about"
        className="min-h-screen bg-[#050505] flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
  
          <p className="uppercase tracking-[8px] text-neutral-500">
            About
          </p>
  
          <h2
            className="
            instrument-serif
            mt-8
            text-[3.5rem]
            md:text-[5rem]
            leading-[0.95]
            font-normal
            tracking-tight
            text-white"
            >
            I Judge a Book
            by its{" "}
            <span className="italic text-[#4D6CFA]">
                Cover
            </span>
            </h2>
  
          <p
            className="
            mt-10
            text-neutral-400
            text-lg
            leading-8
            max-w-3xl"
          >
            I'm Ashish, a Full Stack Developer and AI/ML enthusiast
            currently pursuing my B.Tech at IIIT Dharwad.
  
            I enjoy creating scalable web applications,
            exploring artificial intelligence,
            and documenting everything I learn through content creation.
          </p>
  
        </div>
      </section>
    );
  }