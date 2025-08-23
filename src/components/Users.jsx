import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/all?filter=" + filter, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUsers(res.data.user);
      });
  }, [filter]);

  return (
    <div className="w-full mt-8 flex flex-col gap-4 items-start">
      <h1 className="font-semibold text-xl">Users</h1>
      <input
        type="text"
        placeholder="Search Users"
        onChange={(e) => setFilter(e.target.value)}
        className="bg-slate-100 placeholder:text-slate-400 w-full px-4 py-2 outline-none border border-slate-400/40 rounded-lg"
      />
      <div className="w-full">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
