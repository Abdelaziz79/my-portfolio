import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MyButton({ children }: Props) {
  return (
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500  px-4 py-1 rounded-md text-white hover:scale-110 duration-300 hover:from-blue-500 hover:to-cyan-500 ">
      {children}
    </button>
  );
}
