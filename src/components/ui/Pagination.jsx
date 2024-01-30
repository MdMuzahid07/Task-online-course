const Pagination = () => {
  return (
    <div className="mt-20 flex justify-center gap-5 items-center">
      <button className="w-12 h-12 flex justify-center items-center rounded-full active:bg-black bg-red-500 text-white font-bold">
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="w-12 h-12 rounded-full bg-black active:bg-red-500 text-white font-bold">
        1
      </button>
      <div className="text-3xl font-bold">.</div>
      <div className="text-3xl font-bold">.</div>
      <div className="text-3xl font-bold">.</div>
      <button className="w-12 flex justify-center items-center h-12 rounded-full active:bg-black bg-red-500 text-white font-bold">
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
