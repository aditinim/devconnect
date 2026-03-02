import React from "react";

const ProfileCreation = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-zinc-100 p-8 h-auto w-160 gap-4 shadow-lg shadow-zinc-500k">
          <div className="flex  gap-4">
            <div className="w-68 h-44 bg-white">profile</div>
            <div className="bg-whi flex flex-col gap-5 w-full justify-center">
              <div className="bg-white h-1/3">
              <input type="text" placeholder="Username" className="flex w-full h-full items-center p-4"/>
              </div>
              <div className="bg-white h-1/2" >
              <input type="text" name="bio" id="bio" placeholder="enter the bio" className="flex w-full h-full items-center p-4"/>
              </div>
            </div>
          </div>
          <div className="bg-white p-6">floating skills</div>
          <div className="bg-white h-68 grid grid-cols-2 gap-3 p-6">
            <div className="bg-zinc-300"></div>
            <div className="bg-zinc-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCreation;
