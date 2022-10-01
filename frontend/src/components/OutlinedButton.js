import React from "react";

function OutlinedButton({ text, color }) {
  return (
    <div>
      <button
        className={`text-${color} border-${color} w-52 text-left pl-6 py-2 rounded-md`}
      >
        {text}
      </button>
    </div>
  );
}

export default OutlinedButton;