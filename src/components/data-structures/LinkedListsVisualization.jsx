import React, { useState } from "react";
import { motion } from "framer-motion";

const LinkedListsVisualization = () => {
  // Utility to create a new node
  const createNode = (value) => ({
    value,
    next: null,
    prev: null,
    address: Math.random().toString(16).slice(2, 8),
  });

  // Singly Linked List State
  const [singlyLinkedList, setSinglyLinkedList] = useState({ head: null, size: 0 });

  // Doubly Linked List State
  const [doublyLinkedList, setDoublyLinkedList] = useState({ head: null, size: 0 });

  // Circular Linked List State
  const [circularLinkedList, setCircularLinkedList] = useState({ head: null, size: 0 });

  // Add node function
  const addNode = (list, setList, isCircular = false, isDoubly = false) => {
    const newNode = createNode(list.size * 10 + 10);

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
  };

  // Remove node function
  const removeNode = (list, setList, isCircular = false, isDoubly = false) => {
    if (!list.head) return;

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

  // Render function for linked lists
  const renderList = (list, isCircular = false, isDoubly = false) => {
    const nodes = [];
    let current = list.head;

    while (current) {
      nodes.push(current);
      current = current.next;
      if (isCircular && current === list.head) break;
    }

    return nodes.map((node, index) => (
      <div key={index} className="flex items-center space-x-4">
        <motion.div
          className="flex flex-col items-center border border-gray-300 rounded-md p-4 bg-blue-100 shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="mt-2 text-sm text-gray-600">Data:</div>
          <div className="border border-gray-300 rounded-md px-2 py-1 bg-white text-xs text-gray-800">
            {node.value}
          </div>
          {isDoubly && (
            <>
              <div className="mt-2 text-sm text-gray-600">Prev:</div>
              <div className="border border-gray-300 rounded-md px-2 py-1 bg-white text-xs text-gray-800">
                {node.prev ? node.prev.address : "null"}
              </div>
            </>
          )}
          <div className="mt-2 text-sm text-gray-600">Next:</div>
          <div className="border border-gray-300 rounded-md px-2 py-1 bg-white text-xs text-gray-800">
            {node.next ? node.next.address : "null"}
          </div>
        </motion.div>
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Linked Lists Visualization</h1>

      {/* Singly Linked List Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Singly Linked List</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Singly Linked List consists of nodes, where each node has:
          <ul className="list-disc ml-8 mt-2">
            <li>Data: The value stored in the node.</li>
            <li>Next Pointer: Points to the next node in the sequence.</li>
            <li>The last node’s next pointer is null.</li>
          </ul>
        </p>
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
          </div>
          <div className="flex items-center flex-wrap justify-center">
            {renderList(singlyLinkedList)}
          </div>
        </div>
      </section>

      {/* Doubly Linked List Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Doubly Linked List</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Doubly Linked List consists of nodes, where each node has:
          <ul className="list-disc ml-8 mt-2">
            <li>Data: The value stored in the node.</li>
            <li>Previous Pointer: Points to the previous node.</li>
            <li>Next Pointer: Points to the next node.</li>
          </ul>
        </p>
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
          </div>
          <div className="flex items-center flex-wrap justify-center">
            {renderList(doublyLinkedList, false, true)}
          </div>
        </div>
      </section>

      {/* Circular Linked List Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Circular Linked List</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Circular Linked List connects the last node back to the first node, forming a circle:
          <ul className="list-disc ml-8 mt-2">
            <li>Singly Circular Linked List: The next pointer of the last node points to the head.</li>
            <li>
              Doubly Circular Linked List: The next pointer of the last node points to the head, and the previous pointer of
              the head points to the last node.
            </li>
          </ul>
        </p>
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
          </div>
          <div className="flex items-center flex-wrap justify-center">
            {renderList(circularLinkedList, true, true)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedListsVisualization;