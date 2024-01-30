import CourseCard from "../components/ui/CourseCard";
import { globalStyles } from "../constants";

const Courses = () => {
  return (
    <main>
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
      <section
        className={`${globalStyles.layoutWidth} my-32 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-10`}
      >
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </main>
  );
};

export default Courses;
