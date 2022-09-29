import React from "react";

interface InputProps {
  setInput: (e: any) => void;
  input: string;
}



export const Input = ({input, setInput} : InputProps) => {


  return (
    <input
      className="w-full border-2 border-black bg-stone-100 p-5 text-black focus:outline-none"
      type="text"
      value={input}
      onChange={({ target }) => setInput(target.value)}
      placeholder="Search"
    />
  );
};
