import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcons } from "../icons/icons";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-800 text-white h-14 flex items-center'>
      <div className='wrapper-container w-full'>
        <div
          className='flex items-center gap-1 cursor-pointer'
          onClick={() => navigate("/")}
        >
          <LogoIcons />
          <p className='font-semibold'>
            <span className='text-yellow-500'>C</span>rypto
            <span className='text-yellow-500'>U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
