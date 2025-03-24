import React from "react";

export const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${backgroundColor || "bg-red-600"} 
        ${textColor || "text-white"} 
        ${borderColor || "border-red-600"} 
        rounded-full`}
    >
      {label}
      {iconUrl && (
        <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} alt="" />
      )}
    </button>
  );
};
