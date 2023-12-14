import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const EightQueens = () => {
  const javascriptCode = `
  const [board, setBoard] = useState(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(false))
  );
  const [array, setArray] = useState(Array(8).fill(0));


  const isSafeToPlaceQueen = (row, col) => {
    // Check if there is no queen in the same row
    if (board[row].includes(true)) return false;

    // Check if there is no queen in the same column
    for (let i = 0; i < 8; i++) {
      if (board[i][col]) return false;
    }

    // Check if there is no queen in the left upper diagonal
    for (let y = row, x = col; y >= 0 && x >= 0; y--, x--) {
      if (board[y][x]) return false;
    }

    // Check if there is no queen in the right upper diagonal
    for (let y = row, x = col; y >= 0 && x < 8; y--, x++) {
      if (board[y][x]) return false;
    }

    return true;
  };

  const handleCellClick = (row, col) => {
    if (isSafeToPlaceQueen(row, col)) {
      const newBoard = board.map((r, rowIndex) =>
        r.map(
          (cell, colIndex) => (rowIndex === row && colIndex === col) || cell
        )
      );
      setBoard(newBoard);
      const newArray = [...array];

      newArray[row] = col;
      setArray(newArray);
    }
  };
`;

  const [board, setBoard] = useState(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(false))
  );
  const [array, setArray] = useState(Array(8).fill(0));

  function canPlace(row, col) {
    for (let i = 0; i < col; i++) {
      if (
        array[i] === array[col] ||
        Math.abs(array[i] - array[col]) === Math.abs(i - col)
      ) {
        return false;
      }
    }
    return true;
  }

  const isSafeToPlaceQueen = (row, col) => {
    // Check if there is no queen in the same row
    if (board[row].includes(true)) return false;

    // Check if there is no queen in the same column
    for (let i = 0; i < 8; i++) {
      if (board[i][col]) return false;
    }

    // Check if there is no queen in the left upper diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j]) return false;
    }

    // Check if there is no queen in the right upper diagonal
    for (let i = row, j = col; i >= 0 && j < 8; i--, j++) {
      if (board[i][j]) return false;
    }

    return true;
  };

  const handleCellClick = (row, col) => {
    if (isSafeToPlaceQueen(row, col)) {
      const newBoard = board.map((r, rowIndex) =>
        r.map(
          (cell, colIndex) => (rowIndex === row && colIndex === col) || cell
        )
      );
      setBoard(newBoard);
      const newArray = [...array];

      newArray[row] = col;
      setArray(newArray);
    }
  };

  return (
    <>
      <div className="mx-auto my-8 text-white">
        <h1 className="text-2xl font-bold text-center mb-4">
          8-Queens Problem
        </h1>
        <div className="flex justify-center flex-wrap gap-y-4 gap-x-2 sm:gap-x-12">
          <table className="border border-black">
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`w-8 h-8 text-center ${
                        (rowIndex + colIndex) % 2 === 0
                          ? "bg-gray-300"
                          : "bg-gray-100"
                      } ${cell ? "bg-red-500 text-white" : "cursor-pointer"}`}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                      {cell ? "Q" : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <table className="border border-black w-12 justify-center flex text-black font-bold">
            <tbody className="w-full bg-black">
              {array.map((element, index) => (
                <p key={index} className="flex justify-center">
                  <tr
                    className={`h-8 text-center w-12 ${
                      index % 2 === 0 ? "bg-gray-300" : "bg-gray-100"
                    }`}
                  >
                    {element}
                  </tr>
                </p>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="shadow-sky-500 shadow-2xl p-4 rounded border-2 text-white font-semibold hover:scale-105 duration-300 transition-transform"
          >
            Reset
          </button>
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

export default EightQueens;
