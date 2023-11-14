import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const NODE = 6;

class Node {
  constructor(val) {
    this.val = val;
    this.state = 0; // status: 0 for not visited, 1 for visited, 2 for completed
  }
}

const BFSComponent = () => {
  const javascriptCode = `
  const NODE = 6;

  class Node {
    constructor(val) {
      this.val = val;
      this.state = 0; // status: 0 for not visited, 1 for visited, 2 for completed
    }
  }


    const [graph, setGraph] = useState([
    [0, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 1, 0],
  ]);

  const [startVertex, setStartVertex] = useState('B');
  const [result, setResult] = useState('');

  const bfs = (vert, s) => {
    const queue = [];
    for (let i = 0; i < NODE; i++) {
      vert[i].state = 0; // not visited
    }
    vert[s.val].state = 1; // visited
    queue.push(s); // insert starting node

    while (queue.length > 0) {
      const u = queue.shift(); // delete from queue and print
      setResult((prevResult) => prevResult + String.fromCharCode(u.val + 65) + ' ');

      for (let i = 0; i < NODE; i++) {
        if (graph[i][u.val]) {
          // when the node is non-visited
          if (vert[i].state === 0) {
            vert[i].state = 1;
            queue.push(vert[i]);
          }
        }
      }
      u.state = 2; // completed for node u
    }
  };
`;
  const [graph, setGraph] = useState([
    [0, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 1, 0],
  ]);

  const [startVertex, setStartVertex] = useState("B");
  const [result, setResult] = useState("");

  const bfs = (vert, s) => {
    const queue = [];
    for (let i = 0; i < NODE; i++) {
      vert[i].state = 0; // not visited
    }
    vert[s.val].state = 1; // visited
    queue.push(s); // insert starting node

    while (queue.length > 0) {
      const u = queue.shift(); // delete from queue and print
      setResult(
        (prevResult) => prevResult + String.fromCharCode(u.val + 65) + " "
      );

      for (let i = 0; i < NODE; i++) {
        if (graph[i][u.val]) {
          // when the node is non-visited
          if (vert[i].state === 0) {
            vert[i].state = 1;
            queue.push(vert[i]);
          }
        }
      }
      u.state = 2; // completed for node u
    }
  };

  const handleStartTraversal = () => {
    const vertices = Array.from({ length: NODE }, (_, i) => new Node(i));
    const start = startVertex.charCodeAt(0) - "A".charCodeAt(0);
    setResult("BFS Traversal: ");
    bfs(vertices, vertices[start]);
  };

  return (
    <>
      <div className="py-12 text-xl font-bold text-white font-sans ">
        <h2 className="flex justify-center">Breadth-First Search (BFS)</h2>
        <div className="flex flex-wrap gap-y-2 justify-center gap-x-6 py-3">
          <label>Enter starting vertex: </label>
          <input
            className="text-black"
            type="text"
            value={startVertex}
            onChange={(e) => setStartVertex(e.target.value.toUpperCase())}
          />
          <button onClick={handleStartTraversal}>Start BFS</button>
        </div>
        <div className="flex justify-center">
          <p>{result}</p>
        </div>
      </div>
      <div className="code-display-container px-2 sm:px-12">
        <SyntaxHighlighter
          language="javascript"
          style={okaidia}
          className="code-highlighter"
        >
          {javascriptCode.trim()}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default BFSComponent;
