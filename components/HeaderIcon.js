import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center rounded-md cursor-pointer sm:h-14 md:px-10 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
      <Icon className={` text-gray-500 h-5 sm:h-7 text-center  mx-auto group-hover:text-blue-500 ${active && "text-blue-500"}`} />
    </div>
  );
};

export default HeaderIcon;
