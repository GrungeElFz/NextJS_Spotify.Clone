"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";

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

  return (
    <div className="flex h-full">
      <div className="hidden h-full md:flex flex-col gap-y-2 w-[300px] p-2">
        {/* SideBar Navigation */}
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>

        {/* Song Library */}
        <Library />
      </div>

      <main className="flex-1 h-full overflow-auto py-2">{children}</main>
    </div>
  );
};

export default SideBar;
