import { useEffect, useState } from "react";
import CourseCard from "../components/ui/CourseCard";
import Pagination from "../components/ui/Pagination";
import { globalStyles } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseData } from "../features/courses/courseSlice";

const Courses = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  return (
    <main className="bg-slate-50">
      <section className="courses-bg">
        <div className="bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto">
            <div className="min-h-[50vh] w-full flex justify-center items-center">
              <h1 className="text-4xl sm:text-6xl md:text-[90px] lg:text-[120px] font-semibold text-white">
                All Courses
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`${globalStyles.layoutWidth} py-32 `}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-10">
          {courses?.courses?.map((data) => (
            <CourseCard key={data.id} data={data} />
          ))}
        </div>
        <Pagination />
      </section>
    </main>
  );
};

export default Courses;
