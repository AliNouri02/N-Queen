import React, { useState } from "react";

const Fib = () => {
  const [array, setArray] = useState(Array(8).fill(0));
  const [newLength, setNewLength] = useState("");
  const [number, setNumber] = useState();
  const [result, setResult] = useState();

  const handleChangeLength = () => {
    const parsedLength = parseInt(newLength, 10);
    setNumber(parsedLength)
    if (!isNaN(parsedLength) && parsedLength >= 0) {
      setArray((prevArray) => {
        // If the new length is greater than the current length, fill with zeros.
        if (parsedLength > prevArray.length) {
          return [
            ...prevArray,
            ...Array(parsedLength - prevArray.length).fill(0),
          ];
        }
        // If the new length is less than the current length, truncate the array.
        else if (parsedLength < prevArray.length) {
          return prevArray.slice(0, parsedLength);
        }
        // If the new length is the same, no change needed.
        else {
          return prevArray;
        }
      });
    } else {
      // Handle invalid input (e.g., negative or non-numeric length)
      alert("Please enter a valid non-negative number for the length.");
    }

    // Clear the input field after handling the length change
    setNewLength("");
    handleClickFibonacci()
  };
  const handleClickFibonacci = () => {
    const newArray = [...array];
    console.log("FFFFFFFFFF");

    array[0] = 0;
    setArray(newArray);

    if (number > 0) {
      const newArray = [...array];
      array[1] = 1;
      setArray(newArray);
      for (let i = 0; i < number; i++) {
        const newArray = [...array];
        array[i] = array[i - 1] + array[i - 2];
        setArray(newArray);
      }
    }
    setResult(array[number]);
  };

  return (
    <div>
      <label>
        Enter New Length:
        <input
          type="text"
          value={newLength}
          onChange={(e) => setNewLength(e.target.value)}
        />
      </label>
      <button onClick={handleChangeLength}>Change Length</button>
      {/* 
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClickFibonacci}>Change Length</button> */}
      <p>result is {result}</p>
    </div>
  );
};

export default Fib;
