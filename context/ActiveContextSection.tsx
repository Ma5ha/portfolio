"use client"
import React, { useState, createContext, useContext } from "react";
import { links } from "@/data/Header";

type SectionLabel = (typeof links)[number]["label"];

type ActiveContextSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveContextSectionType = {
  activeSection: SectionLabel;
  setActiveaction: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveContextSection = createContext<ActiveContextSectionType | null>(
  null
);

const ActiveContextSectionProvider = ({
  children,
}: ActiveContextSectionProviderProps) => {
  const [activeSection, setActiveaction] = useState<SectionLabel>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); 
  return (
    <ActiveContextSection.Provider
      value={{
        activeSection,
        setActiveaction,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContextSection.Provider>
  );
};

export default ActiveContextSectionProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveContextSection);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
