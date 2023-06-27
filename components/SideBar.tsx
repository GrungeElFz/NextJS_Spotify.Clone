"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "search",
        href: "/",
      },
      {
        icon: BiSearch,
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
