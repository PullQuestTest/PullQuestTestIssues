import React from "react";
import Button from "./Button";

const User = ({ user }) => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <div className="w-full flex items-center gap-2">
        <div className="bg-slate-100 font-semibold text-xl rounded-full flex items-center justify-center w-12 h-12 text-slate-400">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div className="text-lg">{user.firstName + " " + user.lastName}</div>
      </div>
      <div className="w-52">
        <Button
          to={
            "/transfer?id=" +
            user._id +
            "&firstname=" +
            user.firstName +
            "&lastname=" +
            user.lastName
          }
          btnText={"Send Money"}
        />
      </div>
    </div>
  );
};

export default User;
