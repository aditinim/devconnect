import React from "react";
import { FaArrowRight } from "react-icons/fa6";


const CreateAccountSection = () => {
  return (
    <>
          <div
            id="TrialBody"
            className="bg-[#012412] flex items-center flex-col  pt-25 pb-15"
          >
            <h1 className="font-bold text-4xl text-white">
              Ready to connect with developers worldwide?
            </h1>
            <p className="mt-3 text-zinc-400 text-lg pl-80 pr-80 text-center">
              Join DevConnect today and start building meaningful connections in the
              tech community.
            </p>
    
            <div className="flex gap-3 mt-15">
              <button className="bg-white py-2 px-4 rounded-sm text-black text-sm flex justify-center gap-2 items-center font-bold cursor-pointer">
                Create Free Account <FaArrowRight />
              </button>
              <button className="bg-amber-400 py-2 px-4 rounded-sm text-black font-bold flex justify-center gap-2 cursor-pointer">Sign in</button>
            </div>
          </div>
        </>
  );
};

export default CreateAccountSection;
