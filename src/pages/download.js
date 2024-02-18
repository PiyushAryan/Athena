import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card.js";

export default function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
    <TextRevealCard
      text="Empower Your Data, Unleash"
        revealText="Athena"
        >
        </TextRevealCard>
    </div>
  );
}
