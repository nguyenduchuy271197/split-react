import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false); // open = false

  function handleOpen() {
    setOpen(true);
    // Set state value + Rerender component
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <button className="md:hidden" onClick={handleOpen}>
        <Menu />
      </button>
      {/* Modal */}
      {open === true && (
        <div className="md:hidden">
          <div className="absolute z-20 px-8 pb-5 bg-white border shadow-lg md:text-sm md:static md:block top-2 inset-x-4 rounded-xl md:shadow-none md:border-none">
            <div className="items-center gap-x-20 md:flex">
              <div className="flex items-center justify-between py-5 md:block">
                <a href="/">
                  <img src="https://split-xi.vercel.app/split.svg" alt="" />
                </a>
                <div className="md:hidden">
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>
              </div>
              <div className="items-center flex-1 block mt-8 text-gray-600 md:font-medium md:mt-0 md:flex ">
                <ul className="items-center justify-center space-y-6 text-center md:flex md:space-x-6 md:space-y-0">
                  <li className="hover:text-gray-900">
                    <a href="" className="block">
                      Features
                    </a>
                  </li>
                  <li className="hover:text-gray-900">
                    <a href="" className="block">
                      Pricing
                    </a>
                  </li>
                  <li className="hover:text-gray-900">
                    <a href="" className="block">
                      FAQs
                    </a>
                  </li>
                </ul>
                <div className="items-center justify-end flex-1 mt-6 space-y-6 text-center gap-x-6 md:flex md:space-y-0 md:mt-0">
                  <a href="/" className="block hover:text-gray-900">
                    Sign in
                  </a>
                  <a
                    href="/"
                    className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 text-sm text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Nhận định các trạng thái của component (đóng / mở)
// Tạo các version UI tương ứng với các trạng thái đó
// Xác định được state của component theo ngôn ngữ JS
// Xử lí event
