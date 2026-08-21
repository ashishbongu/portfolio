import heroVideo from "../assets/hero.mp4";

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M6.6 3.8 9.1 3c.7-.2 1.4.2 1.6.9l1.1 3.2c.2.6 0 1.2-.5 1.5l-1.6 1a13.7 13.7 0 0 0 4.7 4.7l1-1.6c.3-.5.9-.7 1.5-.5l3.2 1.1c.7.2 1.1.9.9 1.6l-.8 2.5c-.3.9-1.1 1.5-2 1.4C10.2 18.2 5.8 13.8 5.2 5.8c-.1-.9.5-1.7 1.4-2Z" /></svg>;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto h-screen px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center">

        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left z-10 pb-10 lg:pb-0">

          <h1 className="text-white font-black tracking-tight
                         text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
            B ASHISH
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
            <span className="font-semibold text-white">Niche:</span> Photography, Travelling,
            Storytelling, Poetry, Writing
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm lg:justify-start">
              <span className="font-medium uppercase tracking-[0.18em] text-neutral-500">Follow us</span>
              <a href="https://www.instagram.com/snaparos/" target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#4D6CFA]">
                @snaparos
              </a>
              <span className="text-neutral-600">/</span>
              <a href="https://www.instagram.com/tales/" target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#4D6CFA]">
                @tales
              </a>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <a href="mailto:bonguashish532222@gmail.com?subject=Portfolio%20enquiry" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#4D6CFA] hover:text-white">
                <MailIcon /> Email me
              </a>
              <a href="tel:+919849969068" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA]">
                <PhoneIcon /> Call me
              </a>
            </div>
          </div>

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
