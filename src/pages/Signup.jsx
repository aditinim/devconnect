import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";
import { Link } from "react-router-dom";

const Playground = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center  ">
        <div className="h-[600px] w-[900px]  flex shadow-2xl">
          <div className="bg-white h-full w-1/2 flex justify-center items-center border-r-1 border-[#c2c0c4]  ">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
          <div className=" w-1/2 flex p-6 flex-col items-center gap-12 justify-center">
            <h1 className="font-black text-2xl">DevConnect</h1>

            <div className="flex items-center flex-col w-full gap-2">
              <input
                type="text"
                name="username"
                id="username"
                className="bg-white w-3/4 text-xs pt-2 pb-2 pl-6 pr-6 border-1 border-gray-300 rounded-sm "
                placeholder="Phone number, username or email address"
              />

              <input
                type="password"
                name="password"
                id="password"
                className="bg-white w-3/4 text-xs pt-2 pb-2 pl-6 pr-6 border-1 border-gray-300 rounded-sm "
                placeholder="Password"
              />

              <button className="bg-[#024724] w-3/4 pt-2 pb-2 pl-6 pr-6 rounded-sm text-white font-bold cursor-pointer">
                <Link to="/home" >Login</Link>
              </button>
              <p className="text-xs">Forgot password?</p>
              <p className="text-xs flex gap-1 mt-4">
                Don't have an account?{" "}
                <p className="text-[#448ecb]">
                  <a href="">Sign up</a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
