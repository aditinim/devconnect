import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";

const LovedSection = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-black to-green-700 to-black flex flex-col">
        <div className="bg-[#012412]  h-1/3 flex justify-center flex-col items-center gap-3 ">
          <p className="font-black text-4xl text-white">
            Loved by Developers Worldwide
          </p>
          <p className="w-130 flex justify-center text-center text-[#bababa]">
            Join thousands of developers who've found their community
          </p>
        </div>
        <div className="bg-transparent h-2/3 grid grid-cols-3 gap-7 p-20 pb-22 pt-16">
          <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2 shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="rounded-xl flex justify-center items-center text-4xl text-amber-300">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <p className="font-bold text-2xl text-center text-white mt-3">
              Aditi Nim
            </p>
            <p className="text-zinc-400">Full Stack Developer</p>
            <p className="text-center mt-6 text-zinc-200">
              "DevConnect helped me find collaborators for my portfolio projects. The UI is clean, and I love the community vibes. A must-have for developers trying to grow their network!"
            </p>
          </div>

          <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2 shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="rounded-xl flex justify-center items-center text-4xl text-amber-300">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <p className="font-bold text-2xl text-center text-white mt-3">
              Chhavi Sharma
            </p>
            <p className="text-zinc-400">Frontend Engineer</p>

            <p className="text-center mt-6 text-zinc-200">
              "As someone just starting out in web development, I found DevConnect super welcoming. I got feedback on my first project within a day!"
            </p>
          </div>

          <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2 shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="rounded-xl flex justify-center items-center text-4xl text-amber-300">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <p className="font-bold text-2xl text-center text-white mt-3">
              Mouli Singh
            </p>
            <p className="text-zinc-400">DevOps Engineer</p>

            <p className="text-center mt-6 text-zinc-200">
              "This platform allows me to give back to the dev community. I’ve been mentoring juniors through DevConnect, and the experience has been smooth and rewarding."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LovedSection;
