import { globalStyles } from "./constants";

const App = () => {
  return (
    <main>
      <div className={globalStyles.layoutWidth}>
        <div className="h-full w-full my-56 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-red-500">
            CourseBuy
          </h1>
        </div>
      </div>
    </main>
  );
};

export default App;
