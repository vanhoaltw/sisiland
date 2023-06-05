import classNames from "classnames";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navs } from "./Header";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";

export default function NavMobile({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="block md:hidden">
      <ul
        className={classNames(
          "overflow-hidden transition-all duration-150 space-y-4 overflow-auto",
          isOpen ? "max-h-[0]" : "max-h-[500px]"
        )}
      >
        {navs.map((n) => (
          <li key={n.title} className="dropdown uppercase font-semibold ">
            <div className="flex items-center gap-2 p-2 px-4 border border-transparent hover:border-current rounded-full">
              {n.title} <AiFillCaretDown />
            </div>
            <ul className="dropdown-content block !border-none !shadow-none !min-w-none">
              {n.options.map((o) => (
                <li key={o.title} className="dropdown">
                  <span className="flex items-center gap-2 p-2 px-4 ml-4">
                    {o.href ? <Link href={o.href}>{o.title}</Link> : o.title}{" "}
                    {o.options && <AiFillCaretDown />}
                  </span>
                  <div className="dropwdown-content block !border-none !shadow-none !min-w-none">
                    {o.options?.map((opt) => (
                      <div className="flex items-center gap-2 p-2 px-4 ml-8">
                        {opt.href ? <Link href={opt.href}>{opt.title}</Link> : opt.title}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
