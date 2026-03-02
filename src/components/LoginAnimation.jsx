import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";



const LoginAnimation = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <Lottie animationData={loginAnimation} loop={false} />
    </div>
  );
};

export default LoginAnimation;
