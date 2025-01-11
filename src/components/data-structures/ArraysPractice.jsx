import React, { useState } from "react";
import { motion } from "framer-motion";

const ArraysPractice = () => {
  const [array, setArray] = useState([10, 20, 30]); // Initial array
  const [newValue, setNewValue] = useState(""); // Value to add
  const [index, setIndex] = useState(""); // Index for operations
  const [searchValue, setSearchValue] = useState(""); // Value to search
  const [searchResult, setSearchResult] = useState(null); // Search result index
  const [error, setError] = useState(""); // Error message

  // Reset error message
  const resetError = () => setError("");

  // Add element at the end of the array
  const addElement = () => {
    resetError();
    if (newValue === "") {
      setError("Value cannot be empty.");
      return;
    }
    setArray((prevArray) => [...prevArray, parseInt(newValue)]);
    setNewValue("");
  };

  // Add element at a specific index
  const addAtIndex = () => {
    resetError();
    if (newValue === "") {
      setError("Value cannot be empty.");
      return;
    }
    if (index === "" || isNaN(index)) {
      setError("Index must be a valid number.");
      return;
    }
    if (index < 0) {
      setError("Index cannot be negative.");
      return;
    }
    if (index > array.length) {
      setError("Index cannot be greater than the array length.");
      return;
    }
    const updatedArray = [...array];
    updatedArray.splice(index, 0, parseInt(newValue));
    setArray(updatedArray);
    setNewValue("");
    setIndex("");
  };

  // Delete element at a specific index
  const deleteAtIndex = () => {
    resetError();
    if (index === "" || isNaN(index)) {
      setError("Index must be a valid number.");
      return;
    }
    if (index < 0) {
      setError("Index cannot be negative.");
      return;
    }
    if (index >= array.length) {
      setError("Index out of bounds.");
      return;
    }
    const updatedArray = array.filter((_, i) => i !== parseInt(index));
    setArray(updatedArray);
    setIndex("");
  };

  // Search for a value in the array
  const searchElement = () => {
    resetError();
    if (searchValue === "") {
      setError("Please enter a value to search.");
      return;
    }
    const result = array.indexOf(parseInt(searchValue));
    setSearchResult(result !== -1 ? result : "Not Found");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Arrays: Concept and Practice
      </h2>

      
      {/* Section 1: Concept Explanation */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Understanding Arrays
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          An array is a linear data structure that stores elements in contiguous
          memory locations. Each element is identified by its index, starting
          from 0. Arrays allow for efficient access to elements using their
          index.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Here's how basic operations work:
        </p>

        {/* Explanation: Adding Elements */}
        <h4 className="text-xl font-semibold text-gray-800 mb-2">1. Adding Elements</h4>
        <p className="text-gray-600 leading-relaxed mb-4">
          To add an element, you can either append it to the end or insert it at
          a specific index. For example:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded mb-4">
          {`let array = [10, 20, 30]; // Initial array
array.push(40); // Add 40 at the end
array.splice(1, 0, 15); // Add 15 at index 1`}
        </pre>

        {/* Explanation: Deleting Elements */}
        <h4 className="text-xl font-semibold text-gray-800 mb-2">2. Deleting Elements</h4>
        <p className="text-gray-600 leading-relaxed mb-4">
          To delete an element, use its index. For example:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded mb-4">
          {`let array = [10, 20, 30];
array.splice(1, 1); // Remove the element at index 1`}
        </pre>

        {/* Explanation: Searching Elements */}
        <h4 className="text-xl font-semibold text-gray-800 mb-2">3. Searching Elements</h4>
        <p className="text-gray-600 leading-relaxed mb-4">
          To find an element, use the <code>indexOf</code> method. It returns
          the index if found, or -1 if not:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded mb-4">
          {`let array = [10, 20, 30];
let index = array.indexOf(20); // Returns 1`}
        </pre>
      </div>

      {/* Section 2: User Practice */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Practice with Arrays
        </h3>


      {/* User Interaction Section */}
      <div className="mb-6">
        <div className="flex flex-col space-y-4 mb-4">
          {/* Input Fields */}
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Value"
              value={newValue}
              onChange={(e) => {
                setNewValue(e.target.value);
                resetError();
              }}
              className="border p-2 rounded w-28"
            />
            <input
              type="number"
              placeholder="Index (optional)"
              value={index}
              onChange={(e) => {
                setIndex(e.target.value);
                resetError();
              }}
              className="border p-2 rounded w-28"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={addElement}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Add at End
            </button>
            <button
              onClick={addAtIndex}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
            >
              Add at Index
            </button>
            <button
              onClick={deleteAtIndex}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Delete at Index
            </button>
          </div>

          {/* Search Field */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              placeholder="Search Value"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                resetError();
              }}
              className="border p-2 rounded w-36"
            />
            <button
              onClick={searchElement}
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              Search
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Search Result */}
          {searchResult !== null && !error && (
            <p className="text-gray-700 mt-2">
              {`Result: ${
                searchResult === "Not Found"
                  ? "Value Not Found"
                  : `Index ${searchResult}`
              }`}
            </p>
          )}
        </div>
      </div>

      {/* Array Visualization */}
      <div className="mt-6 bg-gray-900 p-4 rounded shadow text-white">
        <h3 className="text-xl font-semibold mb-4">Array Visualization</h3>
        <div className="flex justify-center items-center">
          {array.map((elem, idx) => (
            <motion.div
              key={idx}
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center">
                {/* Array Element */}
                <div className="bg-blue-300 p-2 text-center w-16 mb-2 rounded shadow">
                  {elem}
                </div>
                {/* Index */}
                <div className="text-gray-400 text-sm">{`Index: ${idx}`}</div>
              </div>

              {/* Arrow */}
              {idx < array.length - 1 && (
                <motion.div
                  className="text-gray-400 text-lg p-4 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  ➡️
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArraysPractice;
