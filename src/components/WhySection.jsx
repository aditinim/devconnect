import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";



const WhySection = () => {
  return (
    <>
         <div className="h-screen bg-gradient-to-r from-black to-green-700 to-black flex flex-col">
           <div className="bg-[#012412]  h-1/3 flex justify-center flex-col items-center gap-3 ">
             <p className="font-black text-4xl text-white">
               Why choose DevConnect?
             </p>
             <p className="w-130 flex justify-center text-center text-[#bababa]">
               Everything you need to build meaningful connections and advance your
               developer career
             </p>
           </div>
           <div className="bg-transparent h-2/3 grid grid-cols-4 gap-7 p-20 pb-22 pt-16">
             <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2 shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-yellow-500 h-15 w-15 rounded-xl flex justify-center items-center text-4xl">
                 <MdConnectWithoutContact />
               </div>
               <p className="font-bold text-2xl text-center text-white mt-3">
                 Connect with Developers
               </p>
               <p className="text-center mt-6 text-zinc-200">
                 Find and connect with developers worldwide. Build your
                 professional network and discover new opportunities.
               </p>
             </div>
   
             <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2  shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-yellow-500 h-15 w-15 rounded-xl flex justify-center items-center text-4xl">
                 <IoChatbubblesSharp />
               </div>
               <p className="font-bold text-2xl text-center text-white mt-3">
                 Real Time Chat
               </p>
               <p className="text-center mt-6 text-zinc-200">
                 Chat instantly with fellow developers. Share code, discuss
                 projects, and collaborate seamlessly.
               </p>
             </div>
   
             <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2  shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-yellow-500 h-15 w-15 rounded-xl flex justify-center items-center text-4xl">
                 <FaProjectDiagram />
               </div>
               <p className="font-bold text-2xl text-center text-white mt-3">
                 Showcase Projects
               </p>
               <p className="text-center mt-6 text-zinc-200">
                 Display your best work and portfolio. Get feedback from the
                 community and discover inspiring projects.
               </p>
             </div>
   
             <div className="bg-transparent rounded-xl p-10 flex flex-col items-center gap-2  shadow-xl shadow-black border-amber-200 border-[0.5px] transition duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-yellow-500 h-15 w-15 rounded-xl flex justify-center items-center text-4xl">
                 <RiGlobalLine />
               </div>
               <p className="font-bold text-2xl text-center text-white mt-3">
                 Global Community
               </p>
               <p className="text-center mt-6 text-zinc-200">
                 Join a worldwide community of developers. Learn from diverse
                 perspectives and experiences.
               </p>
             </div>
           </div>
         </div>
       </>
  )
}

export default WhySection
