import React from "react";
import { Link } from "react-router-dom";

/**
 * Props:
 * - title: string
 * - items: [{ name, path, slug }]
 * - currentSub: slug of active child (e.g. 'sachet-nari')
 */
function DropdownSection({ title, items = [], currentSub }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-2 text-sm space-y-1">
        {items.map((it) => {
          const isActive = currentSub === it.slug;
          return (
            <li key={it.name} className={`cursor-pointer md:pl-2 ${isActive ? "font-bold text-[#266d67]" : "text-[#266d67]"}`}>
              <Link to={it.path} className="block">
                {it.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownSection;
