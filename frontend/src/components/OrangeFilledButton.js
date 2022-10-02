import React from "react";
import { useNavigate } from "react-router-dom";

function OrangeFilledButton({ text, link }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(link)}
        className={`bg-f2u-orange hover:bg-transparent text-white hover:text-f2u-orange border-f2u-orange border-2
          transition duration-150
          font-bold text-xl w-56 text-left pl-4 py-3 rounded-md`}>
        {text}
      </button>
    </div>
  );
}

export default OrangeFilledButton;