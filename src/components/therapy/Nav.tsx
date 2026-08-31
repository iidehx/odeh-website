"use client";

import Link from "next/link";
import { useMobileMenu } from "@/lib/useMobileMenu";
import { HeartHandIcon, MenuIcon, XIcon } from "@/components/icons";

const links = [
  { href: "/therapy", label: "Home" },
  { href: "/therapy#opportunities", label: "Opportunities" },
  { href: "/therapy#about", label: "About" },
];

export default function TherapyNav() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fdf6ec]/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/therapy"
          className="flex items-center gap-2 text-stone-900"
          onClick={close}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-800 text-white">
            <HeartHandIcon className="h-5 w-5" />
          </span>
          <span className="font-[family-name:var(--font-therapy-serif)] text-lg font-semibold tracking-tight">
            Odeh Therapy
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/therapy/apply"
            className="rounded-full bg-orange-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-900"
          >
            Apply
          </Link>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="therapy-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 md:hidden"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="therapy-mobile-menu"
          className="border-t border-stone-200 bg-[#fdf6ec] px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block text-base font-medium text-stone-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/therapy/apply"
                onClick={close}
                className="block rounded-full bg-orange-800 px-5 py-3 text-center text-base font-semibold text-white"
              >
                Apply
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
