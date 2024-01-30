/* eslint-disable react/prop-types */
const Button = ({ children, styles }) => {
  return (
    <button
      className={`${styles} bg-gradient-to-r from-red-500 hover:from-black  hover:to-red-500 to-black px-7 py-1 text-3xl font-bold text-white mt-10 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
