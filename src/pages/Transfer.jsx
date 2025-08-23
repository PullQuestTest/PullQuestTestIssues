import React, { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useSearchParams } from "react-router-dom";

const Transfer = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const firstname = searchParams.get("firstname");
  const lastname = searchParams.get("lastname");

  const [amount, setAmount] = useState();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg w-md md:w-lg px-6 py-6 flex flex-col gap-4 items-center justify-center">
        <Heading label={"Send Money"} />

        <div className="w-full mt-12 flex items-center gap-2">
          <div className="bg-green-500 text-white font-semibold text-xl rounded-full flex items-center justify-center w-12 h-12">
            {firstname.charAt(0).toUpperCase()}
          </div>
          <div className="font-medium text-2xl">
            {firstname + " " + lastname}
          </div>
        </div>
        <InputBox
          label={"Amount (in Rs)"}
          placeholder={"Enter Amount"}
          type={"number"}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          onClick={() => {
            axios.post(
              "http://localhost:8000/api/v1/account/transfer",
              {
                to: id,
                amount,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          }}
          btnText={"Initiate Transfer"}
          to={"/dashboard"}
        />
      </div>
    </div>
  );
};

export default Transfer;
