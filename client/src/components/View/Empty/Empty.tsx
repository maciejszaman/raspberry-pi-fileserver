import React from "react";
import { EmojiSadFilled } from "@fluentui/react-icons";

export const Empty = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] bg-[#242424]">
      <div className="w-32 h-32 flex flex-col gap-3 text-gray-400 items-center justify-center bg-[#292929] rounded-lg">
        <EmojiSadFilled className="text-4xl" />
        <p>No files found</p>
      </div>
    </div>
  );
};
