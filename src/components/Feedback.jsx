import { useState } from "react";

export default function Feedback() {
  const [type, setType] = useState("Query");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const experience = form.get("experience");
    const subject = `${type} from ${name}`;
    const body = `Name: ${name}\n\n${type}:\n${experience}`;
    window.location.href = `mailto:bonguashish532222@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="bg-white px-6 py-20 text-black sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          Let’s connect
        </p>
        <h2 className="instrument-serif mt-5 text-5xl leading-[0.95] tracking-tight sm:text-6xl">
          Have something to <span className="italic text-[#4D6CFA]">say?</span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="inline-flex rounded-full border border-black/15 p-1" role="group" aria-label="Feedback type">
            {["Query", "Review"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setType(option)}
                aria-pressed={type === option}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${type === option ? "bg-black text-white" : "text-neutral-500 hover:text-black"}`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Your name
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="mt-2 w-full border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-neutral-400 focus:border-[#4D6CFA]"
              />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Your experience
              <textarea
                name="experience"
                required
                rows="4"
                placeholder={type === "Query" ? "What would you like to ask?" : "Tell me about your experience..."}
                className="mt-2 w-full resize-y border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-neutral-400 focus:border-[#4D6CFA]"
              />
            </label>
          </div>

          <button type="submit" className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4D6CFA]">
            Send {type.toLowerCase()}
          </button>
        </form>
      </div>
    </section>
  );
}
