import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import DropdownSection from "./DropdownSection";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Determine active main section and active subpage (if any)
  // Example paths:
  // / => home
  // /what-we-do => what-we-do root
  // /what-we-do/sachet-nari => what-we-do + sachet-nari
  const segments = pathname.split("/").filter(Boolean); // removes empty
  const main = segments[0] || "home"; // 'what-we-do' or 'home' or 'who-we-are'
  const sub = segments[1] || null; // 'sachet-nari' etc.

  // Friendly labels for children (for breadcrumb display)
  const subLabels = {
    "research": "Research",
    "community-interventions": "Community Interventions",
    "digital-literacy": "Digital literacy and safety",
    "techleadhers": "TechLeadhers",
    "climate-resilience": "Climate Resilience",
    "sachet-nari": "Sachet Nari",
  };

  const activeMainIsWhatWeDo = main === "what-we-do";
  const activeSubLabel = sub ? (subLabels[sub] || sub.replace(/-/g, " ")) : null;

  return (
    <header className="bg-white shadow-sm sticky top-8 z-40">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/src/assets/img/aflogo.png"
                alt="AF Logo"
                className="h-8 w-auto md:h-12 lg:h-14 object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`${main === "home" ? "font-extrabold text-[#266d67] underline-offset-2" : "text-[#266d67]"}`}
            >
              Home
            </Link>

            {/* WHAT WE DO dropdown - label becomes breadcrumb if sub active */}
            <div className="relative group bg-gray-100 rounded-md p-2">
              <button
                className={`flex items-center gap-2 focus:outline-none ${
                  activeMainIsWhatWeDo ? "font-bold text-[#266d67] underline-offset-1" : "text-[#266d67]"
                }`}
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                <span>
                  {activeMainIsWhatWeDo && activeSubLabel
                    ? "What we do"
                    : "What we do"}
                </span>
                {/* show breadcrumb under the nav label if subpage active */}
                {activeMainIsWhatWeDo && activeSubLabel && (
                  <span className="block text-xs text-gray-500 ml-1">({activeSubLabel})</span>
                )}
              </button>

              <div className="absolute left-0 top-full mt-3 w-72 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform origin-top transition-all">
                <div className="p-4 grid grid-cols-1 gap-4">
                  <DropdownSection
                    title="Health"
                    items={[
                      { name: "Research", path: "/what-we-do/research", slug: "research" },
                      { name: "Community Interventions", path: "/what-we-do/community-interventions", slug: "community-interventions" },
                    ]}
                    activeSub={activeSubLabel}
                    currentSub={sub}
                  />

                  <DropdownSection
                    title="Education"
                    items={[
                      { name: "Digital literacy and safety", path: "/what-we-do/digital-literacy", slug: "digital-literacy" },
                      { name: "TechLeadhers", path: "/education/techleadhers", slug: "techleadhers" },
                    ]}
                    activeSub={activeSubLabel}
                    currentSub={sub}
                  />

                  <DropdownSection
                    title="Local initiative"
                    items={[
                      { name: "Climate Resilience", path: "/what-we-do/climate-resilience", slug: "climate-resilience" },
                      { name: "Sachet Nari", path: "/what-we-do/sachet-nari", slug: "sachet-nari" },
                    ]}
                    activeSub={activeSubLabel}
                    currentSub={sub}
                  />
                </div>
              </div>
            </div>

            <Link
              to="/who-we-are"
              className={` ${main === "who-we-are" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}
            >
              Who are we?
            </Link>
            <Link
              to="/impact-stories"
              className={` ${main === "impact-stories" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}
            >
              Impact Stories
            </Link>
          </div>

          {/* mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className={`block ${main === "home" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Home</Link>

              <details className="bg-gray-50 rounded-md p-2">
                <summary className={`cursor-pointer text-[#266d67] ${activeMainIsWhatWeDo ? "font-bold" : ""}`}>What we do {activeSubLabel ? `(${activeSubLabel})` : ""}</summary>

                <div className="mt-2 pl-3 space-y-2">
                  <details>
                    <summary className={`cursor-pointer text-[#266d67] ${sub === "research" ? "font-bold" : ""}`}>Health</summary>
                    <div className="pl-3">
                      <Link to="/what-we-do/research" className={`block ${sub === "research" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Research</Link>
                      <Link to="/what-we-do/community-interventions" className={`block ${sub === "community-interventions" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Community Interventions</Link>
                    </div>
                  </details>

                  <details>
                    <summary className={`cursor-pointer text-[#266d67] ${sub === "digital-literacy" || sub === "techleadhers" ? "font-bold" : ""}`}>Education</summary>
                    <div className="pl-3">
                      <Link to="/what-we-do/digital-literacy" className={`block ${sub === "digital-literacy" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Digital literacy and safety</Link>
                      <Link to="/what-we-do/techleadhers" className={`block ${sub === "techleadhers" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>TechLeadhers</Link>
                    </div>
                  </details>

                  <details>
                    <summary className={`cursor-pointer text-[#266d67] ${sub === "climate-resilience" || sub === "sachet-nari" ? "font-bold" : ""}`}>Local initiative</summary>
                    <div className="pl-3">
                      <Link to="/what-we-do/climate-resilience" className={`block ${sub === "climate-resilience" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Climate Resilience</Link>
                      <Link to="/what-we-do/sachet-nari" className={`block ${sub === "sachet-nari" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Sachet Nari</Link>
                    </div>
                  </details>
                </div>
              </details>

              <Link to="/who-we-are" className={`block ${main === "who-we-are" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Who are we?</Link>
              <Link to="/impact-stories" className={`block ${main === "impact-stories" ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>Impact Stories</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
