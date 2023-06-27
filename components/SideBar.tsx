"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "search",
        href: "/",
      },
      {
        label: "Search",
        active: pathname === "search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return <div>{children}</div>;
};

export default SideBar;
