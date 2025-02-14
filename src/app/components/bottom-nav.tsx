import Link from "next/link";
import {
  Home,
  PlusSquare,
  Menu,
  Compass,
  MessageCircleMore,
} from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-gray-200 bg-white px-3 pb-3 dark:border-gray-800 dark:bg-gray-900">
      {/* Home Link Button */}
      <Link
        href="#"
        className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 pt-2"
      >
        <Home className="h-8 w-8" />
        <span>Home</span>
      </Link>
      {/* Explore Link Button */}
      <Link
        href="#"
        className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 border-t-2 border-blue-500  pt-2" // Added border and padding
      >
        <Compass className="h-8 w-8 text-blue-500" />{" "}
        {/* Changed icon color to blue */}
        <span>Explore</span>
      </Link>
      {/* Create Link Button */}
      <Link
        href="#"
        className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 pt-2 "
      >
        <PlusSquare className="h-8 w-8 bg-black  text-white  rounded-md" />{" "}
        <span>Create</span>
      </Link>
      {/* Messages Link Button */}

      <Link
        href="#"
        className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 pt-2"
      >
        <MessageCircleMore className="h-8 w-8" />
        <span>Messages</span>
      </Link>
      {/* Menu Link Button */}

      <Link
        href="#"
        className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 pt-2"
      >
        <Menu className="h-8 w-8" />
        <span>Menu</span>
      </Link>
    </div>
  );
}
