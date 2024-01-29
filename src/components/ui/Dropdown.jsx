/* eslint-disable react/prop-types */
const Dropdown = ({ children, styles, active }) => {
  return (
    <div
      className={`${styles} ${
        active ? "block" : "hidden"
      } w-[300px] h-[400px] px-5 py-7 bg-red-100 `}
    >
      {children}
    </div>
  );
};

export default Dropdown;
