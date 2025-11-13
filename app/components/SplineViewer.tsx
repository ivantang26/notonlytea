"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";

interface SplineViewerProps {
  url?: string;
  className?: string;
}

const DEFAULT_SPLINE_URL = "https://prod.spline.design/yZC4zmODWYcj9Ulv/scene.splinecode";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        "loading-anim"?: string;
      };
    }
  }
}

export default function SplineViewer({ url = DEFAULT_SPLINE_URL, className }: SplineViewerProps) {
  return (
    <spline-viewer
      url={url}
      className={className}
      loading-anim="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
