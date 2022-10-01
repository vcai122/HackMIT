import React from "react";

function FilledButton({ text, color }) {
  return (
    <div>
      <button
        className={`bg-${color} text-white w-52 text-left pl-6 py-2 rounded-md`}
      >
        {text}
      </button>
    </div>
  );
}

export default FilledButton;