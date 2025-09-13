import React from "react";

import { TextReveal } from "@/components/magicui/text-reveal";

const TextRevealSection = () => {
  return (
    <section className="dark bg-background my-0 ">
      <div className=" flex flex-col items-center justify-center">
        <TextReveal className="font-medium">
          FraudShield AI is the comprehensive fraud detection platform designed to protect businesses
          across banking, e-commerce, and telecommunications sectors in Morocco. Leverage advanced
          machine learning to detect and prevent fraudulent transactions in real-time.
        </TextReveal>
      </div>
    </section>
  );
};

export { TextRevealSection };