/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer h-10 bg-white p-6 ${
          !isOpen ? "rounded-2xl" : "rounded-t-3xl"
        }`}
      >
        <h1 className="text-2xl">{title}</h1>
        <p>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </p>
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
