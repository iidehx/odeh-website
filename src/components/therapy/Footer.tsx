import Link from "next/link";
import { HeartHandIcon, MailIcon, PhoneIcon } from "@/components/icons";

export default function TherapyFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#fbf1e2]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-stone-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-800 text-white">
              <HeartHandIcon className="h-4 w-4" />
            </span>
            <span className="font-[family-name:var(--font-therapy-serif)] text-base font-semibold tracking-tight">
              Odeh Therapy
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Odeh Therapy is a dedicated recruitment platform connecting
            therapy professionals with relevant opportunities in the field.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-stone-900">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-stone-400" />
              <a
                href="mailto:Odeh90@gmail.com"
                className="hover:text-stone-900"
              >
                Odeh90@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-stone-400" />
              <a href="tel:+17142049779" className="hover:text-stone-900">
                714-204-9779
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-stone-900">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            <li>
              <Link href="/therapy/privacy" className="hover:text-stone-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/therapy/terms" className="hover:text-stone-900">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200 px-6 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Odeh Therapy. All rights reserved.
      </div>
    </footer>
  );
}
