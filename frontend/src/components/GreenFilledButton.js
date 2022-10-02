import React from "react";
import { useNavigate } from "react-router-dom";

function GreenFilledButton({ text, link }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(link)}
        className={`bg-f2u-green text-white font-bold text-xl w-52 text-left pl-4 py-2 rounded-md`}
      >
        {text}
      </button>
    </div>
  );
}

export default GreenFilledButton;