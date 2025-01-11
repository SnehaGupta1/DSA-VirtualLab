import React, { useState } from "react";
import { motion } from "framer-motion";


const LinkedListsOverview = () => {
  const [linkedList, setLinkedList] = useState({ head: null, size: 0 });


  // Helper function to create a new node
  const createNode = (value) => ({ value, next: null });


  // Function to add a new element to the end of the linked list
  const addElement = () => {
    const newNode = createNode(linkedList.size * 10 + 10);
    if (!linkedList.head) {
      setLinkedList({ head: newNode, size: 1 });
    } else {
      let current = linkedList.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      setLinkedList({ head: linkedList.head, size: linkedList.size + 1 });
    }
  };


  // Function to remove the last element from the linked list
  const removeElement = () => {
    if (!linkedList.head) return;
    if (!linkedList.head.next) {
      setLinkedList({ head: null, size: 0 });
      return;
    }
    let current = linkedList.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
    setLinkedList({ head: linkedList.head, size: linkedList.size - 1 });
  };


  // Function to render the linked list visually
  const renderLinkedList = () => {
    const elements = [];
    let current = linkedList.head;
    while (current) {
      elements.push(current);
      current = current.next;
    }
    return elements;
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Linked Lists Overview</h2>


      {/* Section 1: Introduction */}
      <div id="introduction" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          What is a Linked List?
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          A linked list is a linear data structure where elements (called nodes)
          are connected by pointers. Each node contains two parts: the data and
          a reference (or pointer) to the next node in the sequence.
        </p>
      </div>


      {/* Section 2: Node Structure */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">Node Structure</h3>
        <p className="text-gray-600 mb-4">
          A node in a linked list consists of two parts:
        </p>
        <div className="flex items-center space-x-4">
          <motion.div
            className="flex items-center justify-between border border-gray-500 rounded-md shadow bg-gray-100"
            style={{ width: 200, height: 50 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex-1 text-center border-r border-gray-500">
              <p className="text-sm font-bold">Data</p>
              <p className="text-lg text-gray-700">10</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-sm font-bold">Address</p>
              <p className="text-lg text-gray-700">0x123</p>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Section 3: Types of Linked Lists */}
      <div id="types" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Types of Linked Lists
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Linked lists come in several variations, depending on how nodes are
          connected:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>
            <strong>Singly Linked List:</strong> Each node points to the next
            node. The last node points to null.
          </li>
          <li>
            <strong>Doubly Linked List:</strong> Each node points to both the
            next and the previous nodes.
          </li>
          <li>
            <strong>Circular Linked List:</strong> The last node points back to
            the head, forming a circle.
          </li>
        </ul>
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <h4 className="text-lg font-medium text-gray-700">Visualization:</h4>
          <p className="text-gray-600 mt-2">Singly Linked List:</p>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              10
            </div>
            <div className="text-lg">➡️</div>
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              20
            </div>
            <div className="text-lg">➡️</div>
            <div className="bg-blue-200 p-2 text-center w-16 rounded shadow">
              30
            </div>
          </div>
        </div>
      </div>


      {/* Section 4: Advantages & Disadvantages */}
      <div id="advantages-disadvantages" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Advantages and Disadvantages
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-100 rounded shadow">
            <h4 className="text-xl font-medium text-green-700">Advantages</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Dynamic size: Can grow or shrink as needed.</li>
              <li>Efficient insertion and deletion compared to arrays.</li>
              <li>No need for contiguous memory allocation.</li>
            </ul>
          </div>
          <div className="p-4 bg-red-100 rounded shadow">
            <h4 className="text-xl font-medium text-red-700">Disadvantages</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Sequential access: Slower than arrays for retrieval.</li>
              <li>Extra memory required for pointers.</li>
              <li>More complex implementation than arrays.</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Section 5: Visual Animation */}
      <div id="animation" className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Visual Animation
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Below is a simple visualization of how elements are linked and how
          operations like insertion and deletion work.
        </p>


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
            {renderLinkedList().map((node, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="flex items-center justify-between border border-gray-500 rounded-md shadow bg-blue-200"
                  style={{ width: 200, height: 50 }}
                >
                  <div className="flex-1 text-center border-r border-gray-500">
                    <p className="text-sm font-bold">Data</p>
                    <p className="text-lg text-gray-700">{node.value}</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-sm font-bold">Address</p>
                    <p className="text-lg text-gray-700">
                      {node.next ? "0x" + Math.random().toString(16).slice(2, 6) : "null"}
                    </p>
                  </div>
                </div>
                {index < renderLinkedList().length - 1 && (
                  <motion.div
                    className="text-gray-400 text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
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


export default LinkedListsOverview;