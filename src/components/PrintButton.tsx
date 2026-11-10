"use client";

export default function PrintButton({ label = "Print this checklist" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800 print:hidden"
    >
      {label}
    </button>
  );
}
