import React from "react";
import { useNavigate } from "react-router-dom";

function GreenOutlinedButton({ text, link }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(link)}
        className={`text-f2u-green text-xl font-bold border-2 border-f2u-green w-52 text-left pl-4 py-2 rounded-md`}
      >
        {text}
      </button>
    </div>
  );
}

export default GreenOutlinedButton;