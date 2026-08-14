"use client";

import { assetPath } from "@/lib/assetPath";

/** Fixed photoreal frost texture behind all page content. */
export function FrozenBackdrop() {
  return (
    <div
      className="frozen-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/frost-backdrop.png")}
        alt=""
        className="frozen-backdrop__image"
        draggable={false}
      />
      <div className="frozen-backdrop__wash" />
      <div className="frozen-backdrop__vignette" />
    </div>
  );
}
