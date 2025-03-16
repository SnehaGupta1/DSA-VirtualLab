import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ArraysOverview from "./components/data-structures/ArraysOverview";
import ArraysPractice from "./components/data-structures/ArraysPractice";
import LinkedListsOverview from "./components/data-structures/LinkedListsOverview";
import LinkedListsVisualization from "./components/data-structures/LinkedListsVisualization";
import LinkedListsPractice from "./components/data-structures/LinkedListsPractice";

const HomePage = () => (
  <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DSA Virtual Lab</h1>
    <p className="text-lg text-gray-600">
      Explore the world of Data Structures and Algorithms with interactive animations,
      step-by-step explanations, and hands-on coding experiences. Learn concepts like
      Arrays, Linked Lists, Stacks, Queues, and more.
    </p>
    <p className="text-lg text-gray-600 mt-4">
      Use the navigation menu to select a topic and start exploring!
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="ml-64 p-6 flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/arrays/overview" element={<ArraysOverview />} />
            <Route path="/arrays/practice" element={<ArraysPractice />} />
            <Route path="/linkedlists/overview" element={<LinkedListsOverview />} />
            <Route path="/linkedlists/visualization" element={<LinkedListsVisualization />} />
            <Route path="/linkedlists/practice" element={<LinkedListsPractice />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
