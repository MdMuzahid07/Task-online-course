/* eslint-disable react/prop-types */
import { useState } from "react";

const EnrollCourseCard = ({ course }) => {
  console.log(course);
  const [completed, setCompleted] = useState(false);

  return (
    <div className=" md:max-w-[800PX] w-full max-h-[800px] md:max-h-[245px] rounded-3xl bg-white hover:drop-shadow p-4 object-center relative  transition delay-100 duration-100 ease-linear mb-5 md:mb-0">
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="w-full md:w-64 h-56 md:h-48">
          <img
            src={course?.thumbnail}
            alt=""
            className="w-full h-full object-cover object-center bg-red-500 rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-xl">{course?.name}</h1>
          <p className="mt-3">
            <span className="font-semibold">Instructor: </span>
            {course?.instructor}
          </p>

          <p>
            <span className="font-semibold">Due Date:</span> 20/2/2024
          </p>

          <div className="h-3 w-44 md:w-56 lg:w-80 bg-slate-200 rounded-full mt-3 relative">
            <span
              className="bg-black h-2 rounded-xl absolute top-0.5 left-0.5"
              style={{ width: "75%" }}
            ></span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <button className=" bg-black text-red-500 font-bold rounded-full px-3 py-1">
              Continue
            </button>
            <button
              onClick={() => setCompleted(!completed)}
              className="flex items-center gap-2 bg-white border font-bold rounded-full px-3 py-1"
            >
              <div
                className={`w-5 h-5 border  ${
                  !completed ? "bg-white" : "bg-green-400"
                } rounded-full`}
              ></div>{" "}
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourseCard;
