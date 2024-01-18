import { ChevronRight } from "lucide-react";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <div className="pb-5">
      {/* Container */}
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex justify-between py-5">
          <div className="flex items-center gap-20">
            {/* Logo */}
            <a href="/">
              <img src="https://split-xi.vercel.app/split.svg" alt="" />
            </a>

            {/* Nav links */}
            <ul className="items-center hidden gap-6 text-sm font-medium text-gray-600 md:flex">
              <li>
                <a href="" className="hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-900">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <NavMenu />

          <div className="items-center hidden gap-6 md:flex">
            <a
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="/"
              className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 text-sm text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex"
            >
              Get started
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
