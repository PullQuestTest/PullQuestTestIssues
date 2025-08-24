import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md rounded-md h-14 flex justify-between items-center px-8 md:px-24">
      <Link to={"/dashboard"} className="font-medium">
        GoPAY App
      </Link>
      <div className="flex items-center gap-2">
        <div>Hello</div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center line-clamp-1 cursor-pointer text-slate-400">
          U
        </div>
        <div
          className="text-sm cursor-pointer px-2 py-2 bg-slate-100 rounded-md"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signup");
          }}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default Appbar;
