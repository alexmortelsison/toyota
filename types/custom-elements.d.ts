// types/custom-elements.d.ts

import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        "touch-action"?: string;
        ar?: boolean;
        "ar-modes"?: string;
        poster?: string;
        "shadow-intensity"?: string | number;
        "auto-rotate-delay"?: string | number;
        "rotation-per-second"?: string;
      };
    }
  }
}

export {};
