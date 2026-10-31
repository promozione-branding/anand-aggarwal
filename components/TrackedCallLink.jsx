// components/TrackedCallLink.jsx
"use client";

import { handleCallClick } from "@/utils/tracking";

export default function TrackedCallLink({ children, ...props }) {
  return (
    <a {...props} onClick={() => handleCallClick({ source: "Website" })}>
      {children}
    </a>
  );
}