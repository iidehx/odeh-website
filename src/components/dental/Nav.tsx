"use client";

import Link from "next/link";
import { useMobileMenu } from "@/lib/useMobileMenu";
import { MenuIcon, ToothIcon, XIcon } from "@/components/icons";

const links = [
  { href: "/dental", label: "Home" },
  { href: "/dental#opportunities", label: "Opportunities" },
  { href: "/dental#about", label: "About" },
];

export default function DentalNav() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/dental"
          className="flex items-center gap-2 text-slate-900"
          onClick={close}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <ToothIcon className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Odeh Dental
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/dental/apply"
            className="rounded-md bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Apply
          </Link>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="dental-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="dental-mobile-menu"
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block text-base font-medium text-slate-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/dental/apply"
                onClick={close}
                className="block rounded-md bg-teal-700 px-5 py-3 text-center text-base font-semibold text-white"
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
