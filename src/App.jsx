import { Link, Route, Routes } from "react-router-dom";
import EightQueens from "./components/EightQueens";
import Fib from "./components/Fib";
import FibonacciCalculator from "./components/FibonacciCalculator";
import BFSComponent from "./components/BFSComponent";

function App() {
  return (
    <div className="bg-sky-700 pb-10">
      <div className="flex text-xl font-bold text-white font-sans py-5 justify-center items-center flex-wrap sm:gap-x-12">
        <h2>Teacher : Farzaneh Kaviani</h2>
        <h2>Ali Nouri And Erfan Godarzi</h2>
      </div>
      <div className="flex justify-center flex-wrap gap-y-6 gap-x-12">
        <Link
          className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
          to={"/EightQueens"}
        >
          N Queen Problem
        </Link>
        <Link
          className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
          to={"/fib"}
        >
          Fibonacci
        </Link>
        <Link
          className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
          to={"/BFSComponent"}
        >
          BFSComponent
        </Link>
      </div>
      <main>
        <Routes>
          <Route path="/eightQueens" element={<EightQueens />} />
          <Route path="/fib" element={<FibonacciCalculator  />} />
          <Route path="/BFSComponent" element={<BFSComponent  />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
