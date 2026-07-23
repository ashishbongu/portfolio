import heroVideo from "../assets/hero.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* Video fixed at bottom of hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-[300px] md:w-[500px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full
              h-auto
              pointer-events-none
              select-none
            "
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

    </section>
  );
}