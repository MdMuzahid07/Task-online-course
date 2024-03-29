/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const styles = {
  chips:
    "px-3 h-7 rounded-full flex justify-center items-center text-sm bg-white",
};

const CourseCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/courseDetails/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(data.id)}
      className="hover:scale-[0.9] transition ease-linear duration-100 delay-200 cursor-pointer"
    >
      <div
        style={{ backgroundImage: `url(${data?.thumbnail})` }}
        className={`bg-cover sm:max-w-96 w-full h-[245px] rounded-3xl bg-black p-4 object-center relative`}
      >
        <h1 className="w-[100px] h-10 rounded-full flex justify-center items-center text-2xl bg-red-500 font-bold text-white">
          $ {data?.price}
        </h1>

        <div className="flex items-center gap-4 absolute bottom-4 left-4">
          <h2 className={styles.chips}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Enroll{" "}
            <span className="text-green-400 pl-2">
              {" "}
              {data.enrollmentStatus}
            </span>
          </h2>
          <h2 className={styles.chips}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {data.students.length} students
          </h2>
        </div>
      </div>

      <p className="text-xs tracking-wider mt-5  font-bold">
        By <span className="text-red-500">{data.instructor}</span>
      </p>
      <h2 className="text-2xl mt-1 font-semibold">{data?.name}</h2>
    </div>
  );
};

export default CourseCard;
