import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "translateX(0)" : "translateX(-900px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in-out 0.6s",
        }}
      >
        {children}
      </div>
    </section>
  );
}
export default Section;
