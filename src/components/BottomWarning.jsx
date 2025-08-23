import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ label, btnText, to }) => {
  return (
    <div className="flex gap-1 text-sm">
      <div>{label}</div>
      <Link to={to} className="text-blue-600">{btnText}</Link>
    </div>
  );
};

export default BottomWarning;
