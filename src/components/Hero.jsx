import heroVideo from "../assets/hero.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto h-screen px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center">

        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left z-10 pb-10 lg:pb-0">

          <h1 className="text-white font-black tracking-tight
                         text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
            B ASHISH
          </h1>

          <p className="mt-5 text-neutral-400 max-w-xl text-base sm:text-lg">
            Full Stack Developer • AI/ML Enthusiast • Content Creator
            <br />
            Student at Indian Institute of Information Technology, Dharwad
          </p>

          <button
            className="
            mt-6
            px-8
            py-4
            rounded-full
            bg-black
            text-white
            border
            font-semibold
            hover:text-black
            hover:bg-white
            transition
            duration-300"
          >
            Know My Story
          </button>

        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center lg:justify-end items-end h-full">

          <div className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[520px]">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto pointer-events-none select-none"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

          </div>

        </div>

      </div>

    </section>
  );
}