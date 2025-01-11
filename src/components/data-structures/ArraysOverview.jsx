import React, { useState } from "react";
import { motion } from "framer-motion";

const ArraysOverview = () => {
  const [array, setArray] = useState([10, 20, 30, 40, 50]); // Example array state

  // Function to add a new element to the array
  const addElement = () => {
    setArray((prevArray) => [...prevArray, prevArray.length * 10 + 10]);
  };

  // Function to remove the last element from the array
  const removeElement = () => {
    setArray((prevArray) => prevArray.slice(0, prevArray.length - 1));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Arrays Overview</h2>

      {/* Section 1: Introduction */}
      <div id="introduction" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          What is an Array?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          An array is a data structure that stores a collection of elements,
          each identified by an index or key. Arrays are stored in contiguous
          memory locations, making it easy to access elements using their index.
        </p>
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <h4 className="text-lg font-medium text-gray-700">Example:</h4>
          <pre className="bg-gray-900 text-white p-4 rounded">
            {`int arr[5] = {10, 20, 30, 40, 50};

// Accessing elements
arr[0] = 10;
arr[3] = 40;`}
          </pre>
        </div>
      </div>

      {/* Section 2: How Arrays Work */}
      <div id="how-it-works" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          How Arrays Work
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Arrays are stored in memory with each element occupying the same
          amount of space. You can directly access an element using its index,
          which makes arrays efficient for retrieval but less efficient for
          operations like insertion and deletion.
        </p>
        <div className="mt-4 flex justify-center">
          {/* Visual Representation */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              10
            </div>
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              20
            </div>
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              30
            </div>
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              40
            </div>
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              50
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Memory Layout of Array
        </p>

        {/* Memory Layout Diagram */}
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <h4 className="text-lg font-medium text-gray-700">
            Memory Layout Explained
          </h4>
          <p className="text-gray-600 mt-2">
            Arrays are stored in contiguous memory locations. Each element is
            indexed and can be accessed via its index number. For instance, an
            array of 5 integers would have 5 consecutive memory locations, and
            you can access each value directly using its index.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded mt-2">
            {`Memory Address -> Base address: 0x1000
arr[0] -> 10 at 0x1000
arr[1] -> 20 at 0x1004
arr[2] -> 30 at 0x1008
arr[3] -> 40 at 0x100C
arr[4] -> 50 at 0x1010`}
          </pre>

          <p className="text-gray-600 mt-4">
            <strong>Contiguous Memory Allocation:</strong> When you create an
            array, the computer allocates a block of memory where each element
            is placed next to each other in a sequence. Each element occupies
            the same amount of space (usually 4 bytes for integers in modern
            systems). The starting address (base address) of the array is
            stored, and each subsequent element is accessed by adding a fixed
            offset from this base address.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Array Indexing:</strong> Arrays are indexed starting from 0,
            meaning the first element is at index 0, the second element is at
            index 1, and so on. The memory address of each element is calculated
            by the formula:
            <pre className="bg-gray-900 text-white p-2 rounded text-sm mb-4">
              {`Address of element = Base address + (index × size of element)`}
            </pre>
            For example, if the base address is `0x1000` and the size of each
            integer is 4 bytes, the address of `arr[3]` would be:
            <pre className="bg-gray-900 text-white p-2 rounded text-sm mb-4">
              {`Address of arr[3] = 0x1000 + (3 × 4) = 0x100C`}
            </pre>
            This formula allows for constant time access to any element by
            directly calculating its memory address.
          </p>
        </div>
      </div>

      {/* Section 3: Advantages & Disadvantages */}
      <div id="advantages-disadvantages" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Advantages and Disadvantages
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-100 rounded shadow">
            <h4 className="text-xl font-medium text-green-700">Advantages</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Efficient for retrieving elements using an index.</li>
              <li>Memory is allocated in contiguous blocks.</li>
              <li>Simple to implement and use.</li>
            </ul>
          </div>
          <div className="p-4 bg-red-100 rounded shadow">
            <h4 className="text-xl font-medium text-red-700">Disadvantages</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fixed size: Cannot dynamically grow or shrink.</li>
              <li>Insertion and deletion operations are slow.</li>
              <li>Requires contiguous memory allocation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 4: Use Cases */}
      <div id="use-cases" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Where are Arrays Used?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Arrays are commonly used in scenarios where you need to store a fixed
          number of elements of the same type. For example:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>Storing student marks in a class.</li>
          <li>Representing a matrix in mathematics.</li>
          <li>
            Implementing other data structures like stacks, queues, and heaps.
          </li>
        </ul>
      </div>

      {/* Section 5: Interactive Animation */}
      <div id="animation" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Visual Animation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Below is a simple visualization of how an array grows and operates. We
          will dynamically represent how elements are stored and accessed in
          memory:
        </p>

        {/* Interactive Animation Section */}
        <div className="mt-4 bg-gray-900 p-6 rounded shadow text-white">
          <div className="flex justify-center space-x-4 mb-7">
            <button
              onClick={addElement}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition"
            >
              Add Element
            </button>
            <button
              onClick={removeElement}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition"
            >
              Remove Element
            </button>
          </div>
          <div className="flex justify-center items-center">
            {array.map((elem, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 mx-4"
              >
                {/* Array Element */}
                <motion.div
                  className="bg-blue-300 p-2 text-white text-center w-16 rounded shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {elem}
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  ➡️
                </motion.div>

                {/* Memory Address */}
                <motion.div
                  className="text-sm text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {`0x100${index * 4}`}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArraysOverview;
