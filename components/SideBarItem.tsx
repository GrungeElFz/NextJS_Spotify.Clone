import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-whitetransition-colors text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      SideBarItem
    </Link>
  );
};

export default SideBarItem;