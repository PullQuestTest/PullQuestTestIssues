import React from "react";
import { Link } from "react-router-dom";
const Button = ({ to, btnText, onClick }) => {
  return (
    <Link
      to={to}
      className="bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md text-white font-semibold cursor-pointer w-full flex items-center justify-center"
      onClick={onClick}
    >
      {btnText}
    </Link>
  );
};

export default Button;
