import React, { useState } from "react";
import { motion } from "framer-motion";

const LinkedListsPractice = () => {
  // Utility to create a new node
  const createNode = (value) => ({
    value,
    next: null,
    prev: null,
    address: Math.random().toString(16).slice(2, 8),
  });

  // State for different types of linked lists
  const [singlyLinkedList, setSinglyLinkedList] = useState({ head: null, size: 0 });
  const [doublyLinkedList, setDoublyLinkedList] = useState({ head: null, size: 0 });
  const [circularLinkedList, setCircularLinkedList] = useState({ head: null, size: 0 });

  const [newValue, setNewValue] = useState(""); // Value to add
  const [searchValue, setSearchValue] = useState(""); // Value to search
  const [searchResult, setSearchResult] = useState(null); // Search result
  const [error, setError] = useState(""); // Error message

  // Reset error message
  const resetError = () => setError("");

  // Add node function
  const addNode = (list, setList, isCircular = false, isDoubly = false) => {
    resetError();
    if (newValue === "") {
      setError("Please enter a value to add.");
      return;
    }
    const newNode = createNode(parseInt(newValue));
    if (!list.head) {
      if (isCircular) {
        newNode.next = newNode;
        if (isDoubly) newNode.prev = newNode;
      }
      setList({ head: newNode, size: 1 });
    } else {
      let current = list.head;
      while (current.next && current.next !== list.head) {
        current = current.next;
      }
      current.next = newNode;
      if (isDoubly) newNode.prev = current;
      if (isCircular) {
        newNode.next = list.head;
        if (isDoubly) list.head.prev = newNode;
      }
      setList({ ...list, size: list.size + 1 });
    }
    setNewValue("");
  };

  // Remove node function
  const removeNode = (list, setList, isCircular = false, isDoubly = false) => {
    resetError();
    if (!list.head) {
      setError("The list is already empty.");
      return;
    }
    if (list.size === 1) {
      setList({ head: null, size: 0 });
    } else {
      let current = list.head;
      let prev = null;
      while (current.next && current.next !== list.head) {
        prev = current;
        current = current.next;
      }
      if (isCircular) {
        if (prev) {
          prev.next = list.head;
          if (isDoubly) list.head.prev = prev;
        }
      } else {
        if (prev) prev.next = null;
      }
      setList({ ...list, size: list.size - 1 });
    }
  };

  // Search node function
  const searchNode = (list) => {
    resetError();
    if (searchValue === "") {
      setError("Please enter a value to search.");
      return;
    }
    let current = list.head;
    let index = 0;
    while (current) {
      if (current.value === parseInt(searchValue)) {
        setSearchResult(`Value found at index ${index}`);
        return;
      }
      current = current.next;
      index++;
      if (current === list.head) break; // For circular lists
    }
    setSearchResult("Value not found in the list.");
  };

  // Render function for linked lists
  const renderList = (list, isCircular = false, isDoubly = false) => {
    const nodes = [];
    let current = list.head;
    let index = 0;
    while (current) {
      nodes.push(
        <motion.div
          key={index}
          className="flex flex-col items-center border border-gray-300 rounded-md p-4 bg-blue-100 shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="mt-2 text-sm text-gray-600">Data:</div>
          <div className="border border-gray-300 rounded-md px-2 py-1 bg-white text-xs text-gray-800">
            {current.value}
          </div>
          {isDoubly && (
            <>
              <div className="mt-2 text-sm text-gray-600">Prev:</div>
              <div className="border border-gray-300 rounded-md px-2 py-1 bg-white text-xs text-gray-800">
                {current.prev ? current.prev.address : "null"}
              </div>
            </>
          )}
          <div className="mt-2 text-sm text-gray-600">Next:</div>
          <div className="border border-gray-300 rounded-md px-2 py-1 bg-white text-xs text-gray-800">
            {current.next ? current.next.address : "null"}
          </div>
        </motion.div>
      );
      current = current.next;
      index++;
      if (isCircular && current === list.head) break;
    }
    return nodes.map((node, index) => (
      <div key={index} className="flex items-center space-x-4">
        {node}
        {index < nodes.length - 1 && (
          <motion.div
            className="text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            ➡️
          </motion.div>
        )}
        {isCircular && index === nodes.length - 1 && (
          <motion.div
            className="text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            🔄
          </motion.div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Linked Lists Practice</h2>

      {/* Input Section */}
      <div className="mb-8">
        <input
          type="number"
          placeholder="Value to Add"
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value);
            resetError();
          }}
          className="border p-2 rounded w-28 mb-4"
        />
        <input
          type="number"
          placeholder="Value to Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            resetError();
          }}
          className="border p-2 rounded w-36 mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {searchResult && <p className="text-green-500 text-sm mb-4">{searchResult}</p>}
      </div>

      {/* Singly Linked List Practice */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Singly Linked List</h3>
        <div className="mt-4 bg-gray-900 p-6 rounded shadow text-white">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => addNode(singlyLinkedList, setSinglyLinkedList)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Add Node
            </button>
            <button
              onClick={() => removeNode(singlyLinkedList, setSinglyLinkedList)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Remove Node
            </button>
            <button
              onClick={() => searchNode(singlyLinkedList)}
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Search Node
            </button>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            {renderList(singlyLinkedList)}
          </div>
        </div>
      </section>

      {/* Doubly Linked List Practice */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Doubly Linked List</h3>
        <div className="mt-4 bg-gray-900 p-6 rounded shadow text-white">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => addNode(doublyLinkedList, setDoublyLinkedList, false, true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Add Node
            </button>
            <button
              onClick={() => removeNode(doublyLinkedList, setDoublyLinkedList, false, true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Remove Node
            </button>
            <button
              onClick={() => searchNode(doublyLinkedList)}
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Search Node
            </button>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            {renderList(doublyLinkedList, false, true)}
          </div>
        </div>
      </section>

      {/* Circular Linked List Practice */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Circular Linked List</h3>
        <div className="mt-4 bg-gray-900 p-6 rounded shadow text-white">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => addNode(circularLinkedList, setCircularLinkedList, true, true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Add Node
            </button>
            <button
              onClick={() => removeNode(circularLinkedList, setCircularLinkedList, true, true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Remove Node
            </button>
            <button
              onClick={() => searchNode(circularLinkedList)}
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Search Node
            </button>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            {renderList(circularLinkedList, true, true)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedListsPractice;