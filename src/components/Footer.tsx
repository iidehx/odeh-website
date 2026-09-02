import Link from "next/link";
import { CalculatorIcon, MailIcon, PhoneIcon } from "@/components/icons";

export default function Footer({
  description,
  privacyHref,
  termsHref,
}: {
  description: string;
  privacyHref: string;
  termsHref: string;
}) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
              <CalculatorIcon className="h-4 w-4" />
            </span>
            <span className="text-base font-semibold tracking-tight">Omar Odeh, CPA</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-slate-400" />
              <a href="mailto:Odeh90@gmail.com" className="hover:text-slate-900">
                Odeh90@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-slate-400" />
              <a href="tel:+17142049779" className="hover:text-slate-900">
                714-204-9779
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <Link href={privacyHref} className="hover:text-slate-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={termsHref} className="hover:text-slate-900">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Omar Odeh, CPA. All rights reserved.
      </div>
    </footer>
  );
}
