import EnrollCourseCard from "../../components/ui/EnrollCourseCard";

const EnrolledCourses = () => {
  return (
    <main>
      <div className="text-3xl pt-10">My Courses</div>
      <section className="mt-14 grid  xl:grid-cols-2 gap-6 lg:gap-10">
        <EnrollCourseCard />
        <EnrollCourseCard />
        <EnrollCourseCard />
      </section>
    </main>
  );
};

export default EnrolledCourses;
