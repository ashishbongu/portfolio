import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["Tales", "#tales"],
  ["Gallery", "#gallery"],
  ["Poem Desk", "#poem-desk"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const updateActiveLink = () => setActiveHref(window.location.hash || "#home");

    window.addEventListener("hashchange", updateActiveLink);
    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-5 lg:px-12">
        <div className="flex items-center gap-5 text-xs font-medium tracking-wide text-neutral-300 sm:gap-8 sm:text-sm">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setActiveHref(href)}
              className={`relative pb-1 transition-colors hover:text-white ${activeHref === href ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#4D6CFA]" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
