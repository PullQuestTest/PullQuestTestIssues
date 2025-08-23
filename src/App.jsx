import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-xl font-medium">Welcome to GoPAY!!</h1>
      <div className="flex gap-6 w-sm items-center justify-center">
        {/* <Button to="/signin" btnText="Sign In" /> */}
        <Button to="/signup" btnText="Sign Up" />
      </div>
    </div>
  );
};

export default App;
