import Image from "next/image";
import {
  BellIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  viewgridicon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import HeaderIcon from "../components/HeaderIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-2 shadow-md lg:px-5">
      {/* left */}
      <Image
        src={"https://links.papareact.com/5me"}
        width={40}
        height={40}
        layout="fixed"
        alt="facebook logo"
      />

      <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
        <MagnifyingGlassIcon className="h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="ml-2 hidden flex-shrink bg-transparent placeholder-gray-500 outline-none md:inline-flex"
        />
      </div>
      <div></div>
      {/* center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-end sm:space-x-2 ">
        {/* <Image/> prof pic */}
        <p className="pr-3 font-semibold">Yeukai Loreen</p>
        <Bars3Icon className="Icon" />
        <ChatBubbleLeftIcon className="Icon" />
        <BellIcon className="Icon" />
        <ChevronDownIcon className="Icon" />
      </div>
      {/* <div className="card">123</div> */}
    </div>
  );
};

export default Header;
