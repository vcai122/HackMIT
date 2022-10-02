import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-8 pr-8 flex flex-row justify-end">
        <button
          onClick={() => navigate('/')}
          className={'outlined-green-button-style w-32'}>
            Home
        </button>
    </div>
  );
}

export default Navbar;