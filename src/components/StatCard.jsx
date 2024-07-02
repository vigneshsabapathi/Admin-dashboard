// src/components/StatCard.jsx
import React from "react";

const StatCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default StatCard;
