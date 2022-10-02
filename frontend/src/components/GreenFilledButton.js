import React from "react";
import { useNavigate } from "react-router-dom";

function GreenFilledButton({ text, link }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(link)}
        className={`bg-f2u-green hover:bg-transparent text-white hover:text-f2u-green border-f2u-green border-2
          transition duration-150
          font-bold text-xl w-56 text-left pl-4 py-3 rounded-md`}>
        {text}
      </button>
    </div>
  );
}

export default GreenFilledButton;