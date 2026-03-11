import React from "react";
import Badge from "../atoms/Badge";
import Buttons from "../atoms/Buttons";

const HeroLeft = ({badge,heading,subText,btnLabel}) => {
  return (
    <div className="flex flex-col gap-5 items-start">
      <Badge label={badge} />
      <h1 className="font-bold text-5xl uppercase text-gray-900 leading-tight">{heading}</h1>
      <p className="text-gray-400 text-lg">{subText}</p>
      <Buttons label={btnLabel} onClick={()=>alert('Shuro Karo Alert')}/>
    </div>
  );
};

export default HeroLeft;
