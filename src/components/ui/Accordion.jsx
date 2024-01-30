/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center h-10 bg-white p-6 ${
          !isOpen ? "rounded-2xl" : "rounded-t-3xl"
        }`}
      >
        <h1 className="text-2xl">{title}</h1>
        <p>Open</p>
      </div>
      {isOpen && (
        <div className="w-full px-6 py-7 bg-white rounded-b-3xl">
          {children}
        </div>
      )}
    </>
  );
};

export default Accordion;
