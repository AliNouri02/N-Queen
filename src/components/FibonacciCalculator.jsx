import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const FibonacciCalculator = () => {
  const [n, setN] = useState(0);
  const [fibonacciNumber, setFibonacciNumber] = useState(null);
  const javascriptCode = `
  const [n, setN] = useState(0);
  const [fibonacciNumber, setFibonacciNumber] = useState(null);

  const fib = (num) => {
    const f = new Array(num + 1).fill(0);

    f[0] = 0;

    if (num > 0) {
      f[1] = 1;
      for (let i = 2; i <= num; i++) {
        f[i] = f[i - 1] + f[i - 2];
      }
    }

    return f[num];
  };
`;

  const fib = (num) => {
    const f = new Array(num + 1).fill(0);

    f[0] = 0;

    if (num > 0) {
      f[1] = 1;
      for (let i = 2; i <= num; i++) {
        f[i] = f[i - 1] + f[i - 2];
      }
    }

    return f[num];
  };

  const handleCalculate = () => {
    const result = fib(n);
    setFibonacciNumber(result);
  };

  return (
    <>
      <div className="flex  justify-center py-6 text-xl font-bold text-white font-sans gap-x-4">
        <label className="gap-x-6 flex flex-wrap justify-center gap-y-2">
          <span>Enter integer Number:</span>
          <input
            className="text-black"
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <div className="flex flex-wrap justify-center py-6 text-xl font-bold text-white font-sans gap-x-4">
        <button onClick={handleCalculate}>Calculate Fibonacci</button>
        {fibonacciNumber !== null && (
          <p>The Fibonacci number is: {fibonacciNumber}</p>
        )}
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

export default FibonacciCalculator;
