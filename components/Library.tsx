"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onCLick = () => {
    // Handle Upload
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        {/* Your Library */}
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>

        {/* Add Icon */}
        <AiOutlinePlus
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onCLick}
        />
      </div>

      {/* List of Songs */}
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs</div>
    </div>
  );
};

export default Library;
