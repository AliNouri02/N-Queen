import { Link, Route, Routes } from "react-router-dom";
import EightQueens from "./components/EightQueens";
import FibonacciCalculator from "./components/FibonacciCalculator";
import BFSComponent from "./components/findPathByBFS/BFSComponent";
import FloydWarshallApp from "./components/Floyd";
import React, { Component } from "react";

const INF = 99999;

// class AllPairShortestPath extends Component {
//   constructor(props) {
//     super(props);
//     this.V = 5;
//     this.state = {
//       resultMatrix: [],
//     };
//   }

//   componentDidMount() {
//     // When the component mounts, run the Floyd-Warshall algorithm
//     this.floydWarshall(this.props.graph);
//   }

//   floydWarshall(graph) {
//     const dist = Array.from(Array(this.V), () => new Array(this.V).fill(0));
//     let i, j, k;

//     for (i = 0; i < this.V; i++) {
//       for (j = 0; j < this.V; j++) {
//         dist[i][j] = graph[i][j];
//       }
//     }

//     for (k = 0; k < this.V; k++) {
//       for (i = 0; i < this.V; i++) {
//         for (j = 0; j < this.V; j++) {
//           if (dist[i][k] + dist[k][j] < dist[i][j]) {
//             dist[i][j] = dist[i][k] + dist[k][j];
//           }
//         }
//       }
//     }

//     this.printSolution(dist);
//   }

//   printSolution(dist) {
//     const resultMatrix = dist.map((row, i) => (
//       <div key={i}>
//         {row.map((value, j) => (
//           <span key={j}>{value === INF ? "INF " : `${value} `}</span>
//         ))}
//       </div>
//     ));

//     this.setState({ resultMatrix });
//   }

//   render() {
//     return (
//       <div>
//         <p>
//           Following matrix shows the shortest distances between every pair of
//           vertices:
//         </p>
//         {this.state.resultMatrix}
//       </div>
//     );
//   }
// }
// Driver Code
const graph = [
  [0, 1, INF, 1, 5],
  [9, 0, 3, 2, INF],
  [INF, INF, 0, 4, INF],
  [INF, INF, 2, 0, 3],
  [3, INF, INF, INF, 0],
];

function App() {
  return (
    <>
      <div className="bg-sky-400 pb-10">
        <div className="flex text-xl font-bold text-white font-sans py-5 justify-center items-center flex-wrap sm:gap-x-12">
          <h2>professor : Farzaneh Kaviani</h2>
          <h2>Ali Nouri And Erfan Goodarzi</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-y-6 gap-x-12">
          <Link
            className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
            to={"/EightQueens"}
          >
            N Queen Problem
          </Link>
          {/* <Link
            className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
            to={"/fib"}
          >
            Fibonacci
          </Link> */}
          <Link
            className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
            to={"/Floyd"}
          >
            Floyd
          </Link>
          <Link
            className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
            to={"/bfs-find-path"}
          >
            BFS Find Path
          </Link>
        </div>
        <main>
          <Routes>
            <Route path="/eightQueens" element={<EightQueens />} />
            {/* <Route path="/fib" element={<FibonacciCalculator />} /> */}
            <Route path="/Floyd" element={<FloydWarshallApp graph={graph} />} />
            <Route path="/bfs-find-path" element={<BFSComponent />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
