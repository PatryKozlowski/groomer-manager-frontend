"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type SidebarContextValue = {
  isOpen: boolean;
  toggle: () => void;
};

type SidebarProviderProps = {
  children: ReactNode;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined
);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
