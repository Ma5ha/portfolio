"use client"
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveContextSection";
import { useEffect } from "react";

export function useSectionInView(SectionLabel) {
  const { ref, inView } = useInView({ threshold: 0.25 });
  const { setActiveaction, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveaction(SectionLabel);
    }
  }, [inView, setActiveaction, timeOfLastClick, SectionLabel]);

  return {
    ref,
  };
}

