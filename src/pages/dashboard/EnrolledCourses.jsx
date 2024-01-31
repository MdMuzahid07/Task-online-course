import EnrollCourseCard from "../../components/ui/EnrollCourseCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseData } from "../../features/courses/courseSlice";
import { useEffect } from "react";

const EnrolledCourses = () => {
  const enrolled = useSelector((state) => state.courses.enrolled);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  return (
    <main>
      <div className="text-3xl pt-10">My Courses</div>
      <section className="mt-14 grid  xl:grid-cols-2 gap-6 lg:gap-10">
        {enrolled?.map((course) => (
          <EnrollCourseCard key={course?.id} course={course} />
        ))}
      </section>
    </main>
  );
};

export default EnrolledCourses;
