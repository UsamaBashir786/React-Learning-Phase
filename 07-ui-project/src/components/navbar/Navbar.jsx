import React from "react";
import Buttons from "../atoms/Buttons";

const Navbar = ({brand,links}) => {
  return (
    <div className="flex flex-row items-center justify-between px-10 py-4 border-b border-gray-200">
      <h1 className="font-bold text-xl text-red-600">{brand}</h1>
      <ul className="flex gap-8 text-gray-600 text-sm">
        {links.map((link)=>(
            <li className="hover:text-red-600 cursor-pointer">{link}</li>
        ))}
      </ul>
      <Buttons label={'Login'} onClick={ () => alert('I am login button') } />
    </div>
  );
};

export default Navbar;
