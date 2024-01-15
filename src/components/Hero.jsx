import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div>
      {/* Container */}
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="relative py-28 flex flex-col items-center gap-5 text-center max-w-4xl mx-auto">
          <div
            className="absolute top-12 m-auto max-w-3xl h-[250px] blur-[130px] inset-0"
            style={{
              background:
                "linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)",
            }}
          ></div>
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            The fastest way to Increase your{" "}
            <span className="bg-gradient-to-r from-[#9867F0] to-[#ED4E50] text-transparent bg-clip-text">
              website traffic
            </span>
          </h1>
          <p className="max-w-xl mx-auto">
            The ultimate way to get more website traffic and grow your online
            business. Start your free trial now.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
            >
              Get free trial <ChevronRight />
            </a>
            <a
              href="/"
              className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
            >
              Learn More <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
