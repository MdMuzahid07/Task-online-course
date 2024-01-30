import Accordion from "../components/ui/Accordion";
import { globalStyles } from "../constants";
import Button from "./Button";

const CourseDetails = () => {
  return (
    <div className="bg-slate-50">
      <section className="detailsBg">
        <div className="bg-gradient-to-r from-black via-red-500 bg-opacity-50">
          <div className={globalStyles.layoutWidth}>
            <div className="min-h-[50vh] w-full flex flex-col justify-center">
              <h1 className="text-4xl sm:text-6xl md:text-[90px] lg:text-[120px] font-semibold text-white">
                Course Title
              </h1>
              <p className="text-xl flex items-center text-white px-5 py-1 mt-5">
                <span className="pr-3 flex items-center gap-2">
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  By John doe
                </span>{" "}
                |
                <span className="pl-3 flex items-center gap-2">
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
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  Business
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={globalStyles.layoutWidth}>
        <div className="grid lg:grid-cols-9 gap-6 pt-10 pb-20">
          <main className="lg:col-span-6">
            <h1 className="text-2xl sm:text-4xl font-semibold text-red-500">
              About this course
            </h1>
            <p className="mt-5 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
              quam soluta adipisci libero consequatur tempore optio provident.
              Eveniet quos ad optio tempora doloremque. Vitae molestiae magni
              porro accusantium, eum sit dolores itaque maxime quae in eligendi
              veniam cupiditate doloremque. Itaque unde rerum facere sequi est
              rem? Tenetur cum voluptatibus aperiam!
            </p>

            <p className="text-xl mt-10">
              <span className="font-bold">Course Pre-requisites: </span>Basic
              Business Analytics, Familiar with Marketing
            </p>

            <div className="mt-10">
              <Accordion title={"Syllabus"}>
                <ul>
                  <li className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, itaque!
                  </li>
                  <li className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, itaque!
                  </li>
                  <li className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, itaque!
                  </li>
                  <li className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, itaque!
                  </li>
                  <li className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, itaque!
                  </li>
                </ul>
              </Accordion>
            </div>
          </main>
          <aside className="lg:col-span-3 max-h-[1000px] lg:max-h-[750px] bg-white rounded-3xl p-7 md:-mt-44">
            <img
              src="https://demo.edublink.co/wp-content/uploads/2023/05/girl-1.webp"
              alt="course-banner"
              className="max-h-[300px] md:max-h-[400px] lg:max-h-[250px] w-full object-cover object-center bg-red-500 rounded-2xl"
            />

            <ul>
              <li>
                <h1 className="text-3xl font-bold mt-7 mb-8 border-l-2 pl-3 border-red-500">
                  Course Info
                </h1>
              </li>
              <li className="mb-3 text-xl">
                <span className="font-semibold">Name: </span>Business Analytics
              </li>
              <li className="mb-3 text-xl">
                <span className="font-semibold">Instructor: </span>John Doe
              </li>
              <li className="mb-3 text-xl">
                <span className="font-semibold">Enrollment Status: </span>In
                Progress
              </li>
              <li className="mb-3 text-xl">
                <span className="font-semibold">Duration: </span>12 hours
              </li>
              <li className="mb-3 text-xl">
                <span className="font-semibold">Schedule: </span>10PM-12PM
              </li>
              <li className="mb-3 text-xl">
                <span className="font-semibold">Location: </span>Online
              </li>
            </ul>
            <Button>Enroll Now</Button>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
