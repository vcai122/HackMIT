import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [consumerEmail, setConsumerEmail] = useState("");
  const [consumerPassword, setConsumerPassword] = useState("");
  const [merchantEmail, setMerchantEmail] = useState("");
  const [merchantPassword, setMerchantPassword] = useState("");
  return (
    <div className="w_full h-screen flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <div className="flex flex-row space-x-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-center leading-tight font-bold mb-12">For Consumers</h1>
            <UserInput
              prompt={"Email"}
              val={consumerEmail}
              setter={setConsumerEmail}
            />
            <UserInput
              prompt={"Password"}
              val={consumerPassword}
              setter={setConsumerPassword}
            />
            <div className="flex flex-row justify-center space-x-8">
              <button
                onClick={() => navigate('/consumer-portal')}
                className={'filled-green-button-style w-40'}>
                Sign in
              </button>
              <button
                onClick={() => navigate('/consumer-portal')}
                className={'outlined-green-button-style w-40'}>
                Sign up
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl text-center leading-tight font-bold mb-12">For Merchants</h1>
            <UserInput
              prompt={"Email"}
              val={merchantEmail}
              setter={setMerchantEmail}
            />
            <UserInput
              prompt={"Password"}
              val={merchantPassword}
              setter={setMerchantPassword}
            />
            <div className="flex flex-row justify-center space-x-8">
              <button
                onClick={() => navigate('/merchant-portal')}
                className={'filled-orange-button-style w-40'}>
                Sign in
              </button>
              <button
                onClick={() => navigate('/merchant-portal')}
                className={'outlined-orange-button-style w-40'}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInput({ prompt, val, setter }) {
  const handleChange = (e) => {
    setter(e.target.value);
  };

  return (
    <div>
      <div className="h-4 flex flex-row text-sm space-x-4">
        <div className="w-20 text-left pl-3">{prompt}</div>
        <input
          className="bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-20"
          value={val}
          onChange={handleChange}
        />
      </div>
      <hr className="mt-1 h-[3px] bg-black mb-6" />
    </div>
  );
}

export default SignIn;