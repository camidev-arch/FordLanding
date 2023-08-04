import React from "react";

const Button = ({ styles }) => (
  <button type="button" style={{backgroundColor:'#171ff8'}}  className={`py-4 px-6 font-poppins font-medium text-[18px] text-white  rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
