import React from "react";
// import devConnect_dora from "../assets/DevConnect_dora.png";
// import signupDora from "../assets/signupDora.png";
import Lottie from "lottie-react";
// import loginAnimation from "../assets/Login.json";
import { FaArrowRightLong } from "react-icons/fa6";
import cat from "../assets/Cat Movement.json";
import WhySection from "../components/WhySection";
import LovedSection from "../components/LovedSection";
import CreateAccountSection from "../components/CreateAccountSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-black to-green-700 to-black flex justify-center">
        <div className="bg-transparent flex justify-center items-center">
          <div className="bg-transparent flex h-140 w-300 ">
            <div className="bg-transparent w-140 flex justify-center  flex-col ">
              <p className="flex bg-transparent text-6xl font-black w-160 text-white">
                Connect with developers worldwide
              </p>
              <p className="text-left mt-4 text-zinc-300">
                Join the premier social network for developers. Connect with
                peers, share projects, collaborate on code, and grow your career
                in tech.
              </p>

              <div className="mt-6">
                <button className="text-black bg-[#e8f351] pl-5 pr-5 p-2 rounded-xl font-bold flex items-center gap-3 hover w-50 justify-center">
                  Get Started
                  <FaArrowRightLong />
                </button>

                <div className="flex mt-5 gap-3">
                  <div className="bg-zinc-600 w-9 h-9 rounded-full"></div>
                  <div className="bg-zinc-600 w-9 h-9 rounded-full"></div>
                  <div className="bg-zinc-600 w-9 h-9 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent w-130 h-100 absolute bottom-0 right-5 p-0">
          <Lottie
            animationData={cat}
            loop={true}
            className="absolute -bottom-3"
          ></Lottie>
          <div className="w-130 h-3 bg-black absolute -bottom-3 rounded-sm shadow-[#0f0f0f] shadow-lg"></div>
        </div>
      </div>
      <div className="w-full overflow-hidden -mb-1">
  <svg
    className="w-full h-[100px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#012412"  // Use exact same background as WhySection
      d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,218.7C672,213,768,171,864,133.3C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
</div>
     
      <WhySection />
      <LovedSection/>
      <CreateAccountSection/>
      <Footer/>
    </>
  );
};

export default LandingPage;
