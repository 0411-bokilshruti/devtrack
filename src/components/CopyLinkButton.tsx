"use client";

import { useState } from "react";

export default function CopyLinkButton() {
  const [ isCopied, setCopied ] = useState(false);

  const dataCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={ dataCopy }
      aria-label="Copy profile link"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-medium text-[var(--card-foreground)] transition-colors hover:bg-[var(--control)]"
    >
      { isCopied ? "✓ Copied!" : "🔗 Copy link"}
    </button>
  );
}