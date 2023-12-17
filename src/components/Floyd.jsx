import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const INF = 99999;
const javascriptCode = `
// Function to perform Floyd-Warshall algorithm on a given graph
floydWarshall(graph) {
    // Get the number of vertices in the graph
    const V = graph.length;

    // Create a 2D array 'dist' to store the shortest distances between every pair of vertices
    const dist = Array.from(Array(V), () => new Array(V).fill(0));

    // Initialize 'dist' with the initial values from the input graph
    let i, j, k;
    for (i = 0; i < V; i++) {
        for (j = 0; j < V; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    // Iterate over all vertices to find the shortest paths
    for (k = 0; k < V; k++) {
        // Iterate over all pairs of vertices (i, j) and update the shortest path if necessary
        for (i = 0; i < V; i++) {
            for (j = 0; j < V; j++) {
                // Check if the path through vertex k is shorter than the current shortest path
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    // Update the shortest path between vertices i and j
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Print the final solution (shortest distances between all pairs of vertices)
    this.printSolution(dist);
}

`;
const pythonCode = `
def floyd_warshall(graph):
    # Get the number of vertices in the graph
    V = len(graph)

    # Create a 2D list 'dist' to store the shortest distances between every pair of vertices
    dist = [[0] * V for _ in range(V)]

    # Initialize 'dist' with the initial values from the input graph
    for i in range(V):
        for j in range(V):
            dist[i][j] = graph[i][j]

    # Iterate over all vertices to find the shortest paths
    for k in range(V):
        # Iterate over all pairs of vertices (i, j) and update the shortest path if necessary
        for i in range(V):
            for j in range(V):
                # Check if the path through vertex k is shorter than the current shortest path
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    # Update the shortest path between vertices i and j
                    dist[i][j] = dist[i][k] + dist[k][j]

    # Print the final solution (shortest distances between all pairs of vertices)
    print_solution(dist)

# Assuming you have a print_solution function for displaying the result
def print_solution(dist):
    for row in dist:
        print(row)

# Example usage:
graph = [
    [0, 5, float('inf'), 10],
    [float('inf'), 0, 3, float('inf')],
    [float('inf'), float('inf'), 0, 1],
    [float('inf'), float('inf'), float('inf'), 0]
]

floyd_warshall(graph)
`;
class FloydWarshallApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: props.graph,
      resultMatrix: [],
    };
  }

  componentDidMount() {
    // When the component mounts, run the Floyd-Warshall algorithm
    this.floydWarshall(this.state.graph);
  }

  floydWarshall(graph) {
    const V = graph.length;
    const dist = Array.from(Array(V), () => new Array(V).fill(0));
    let i, j, k;

    for (i = 0; i < V; i++) {
      for (j = 0; j < V; j++) {
        dist[i][j] = graph[i][j];
      }
    }

    for (k = 0; k < V; k++) {
      for (i = 0; i < V; i++) {
        for (j = 0; j < V; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }

    this.printSolution(dist);
  }

  printSolution(dist) {
    const resultMatrix = dist.map((row, i) => (
      <div key={i} className=" flex justify-center gap-4">
        {row.map((value, j) => (
          <span key={j}>{value === INF ? "INF " : `${value} `}</span>
        ))}
      </div>
    ));

    this.setState({ resultMatrix });
  }

  handleGraphChange = (i, j, value) => {
    const newGraph = this.state.graph.map((row, rowIndex) =>
      rowIndex === i
        ? row.map((cell, colIndex) =>
            colIndex === j ? parseInt(value, 10) : cell
          )
        : row
    );

    this.setState({ graph: newGraph }, () => {
      this.floydWarshall(newGraph);
    });
  };

  render() {
    const graphInputs = this.state.graph.map((row, i) => (
      <div key={i}>
        {row.map((value, j) => (
          <input
            key={j}
            type="text"
            value={value}
            onChange={(e) => this.handleGraphChange(i, j, e.target.value)}
          />
        ))}
      </div>
    ));

    return (
      <div className="flex justify-center my-4">
        <div>
          <div className="flex justify-center py-4">
            <p>Enter the graph matrix:</p>
          </div>
          {graphInputs}
          <p className="my-4">
            Following matrix shows the shortest distances between every pair of
            vertices:
          </p>
          {this.state.resultMatrix}
          <div className="code-display-container px-2 sm:px-12 my-6">
            <SyntaxHighlighter
              language="javascript"
              style={okaidia}
              className="code-highlighter"
            >
              {pythonCode.trim()}
            </SyntaxHighlighter>
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
        
        </div>
      </div>
    );
  }
}

export default FloydWarshallApp;
