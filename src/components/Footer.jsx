import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col pb-10 pl-5 pr-5 bg-[#01180b]">
        <div
          id="footerBody"
          className="grid grid-cols-4 bg-[#01180b] text-white pt-24 pb-24 pl-9 pr-9 gap-3"
        >
          <div
            className="
        "
          >
            <ul className="">
              <li>
                <div className="flex gap-2 items-center ">
                  <p className="font-black text-xl">DevConnect</p>
                </div>
              </li>
              <li>
                <p className="mt-4 text-zinc-400">
                  The social network built for developers, by developers. Connect, learn, and grow
                  together.
                </p>
              </li>
              <li>
                <div className="flex mt-4 gap-3">
                  <div className="w-8 h-8 bg-zinc-600 rounded-sm"></div>
                  <div className="w-8 h-8 bg-zinc-600 rounded-sm"></div>
                  <div className="w-8 h-8 bg-zinc-600 rounded-sm"></div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="font-bold hover:text-zinc-300">Product</li>
              <li className="hover:text-zinc-300 cursor-pointer">Features</li>
              <li className="hover:text-zinc-300 cursor-pointer">Security</li>
              <li className="hover:text-zinc-300 cursor-pointer">Pricing</li>
              <li className="hover:text-zinc-300 cursor-pointer">Enterprise</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="font-bold hover:text-zinc-300">Support</li>
              <li className="hover:text-zinc-300 cursor-pointer">Contact</li>
              <li className="hover:text-zinc-300 cursor-pointer">FAQ</li>
              <li className="hover:text-zinc-300 cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-zinc-300 cursor-pointer">
                Help Center
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="font-bold hover:text-zinc-300 cursor-pointer">
                Legal
              </li>
              <li className="hover:text-zinc-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-zinc-300 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-zinc-300 cursor-pointer">Compliance</li>
              <li className="hover:text-zinc-300 cursor-pointer">Security</li>
            </ul>
          </div>
        </div>
        <div id="divider" className="h-0.5 w-full bg-zinc-700"></div>

        <div className="flex justify-between text-zinc-600 mt-5">
          <p>© 2025 CareChain.</p>
          <p>Made with ❤️ for better growth by -Aditi Nim</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
