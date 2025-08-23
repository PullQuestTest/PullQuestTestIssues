import React, { useState } from "react";
import Heading from "../components/Heading.jsx";
import SubHeading from "../components/SubHeading.jsx";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-md md:w-lg px-6 py-6 flex flex-col items-center justify-center gap-4 shadow-lg rounded-lg">
        <Heading label={"Sign In"} />
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
          <Button btnText={"Sign In"} type={"submit"} />
        </form>
        <BottomWarning
          label={"Don't have an account?"}
          btnText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
};

export default Signin;
