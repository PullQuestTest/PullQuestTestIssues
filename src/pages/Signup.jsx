import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-md md:w-lg px-6 py-6 flex flex-col items-center justify-center gap-4 shadow-lg rounded-lg">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Welcome back!"} />
        <form className="flex flex-col gap-4 w-full">
          <InputBox
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputBox
            label={"First Name"}
            type={"text"}
            placeholder={"Enter your first name"}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <InputBox
            label={"Last Name"}
            type={"text"}
            placeholder={"Enter your last name"}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Button
            btnText={"Sign Up"}
            type={"submit"}
            onClick={async () => {
              await axios
                .post("http://localhost:8000/api/v1/user/signup", {
                  username: email,
                  password,
                  firstName: firstname,
                  lastName: lastname,
                })
                .then((response) => {
                  toast.success("Signup successful!");
                  setEmail("");
                  setPassword("");
                  setFirstname("");
                  setLastname("");
                  console.log("Signup successfull", response.data);
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                })
                .catch((error) => {
                  toast.error(error);
                  console.error("There was an error signing up!", error);
                });
            }}
          />
        </form>
        <BottomWarning
          label={"Already have an account?"}
          btnText={"Sign In"}
          to={"/signin"}
        />
      </div>
    </div>
  );
};

export default Signup;
