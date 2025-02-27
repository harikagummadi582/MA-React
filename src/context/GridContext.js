import React, { createContext, useState } from "react";

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [activeCount, setActiveCount] = useState(0);
  const [grid, setGrid] = useState(Array(4).fill(false));

  const toggleCell = (index) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[index] = !newGrid[index];
      setActiveCount(newGrid.filter((cell) => cell).length);
      return newGrid;
    });
  };

  return (
    <GridContext.Provider value={{ grid, toggleCell, activeCount }}>
      {children}
    </GridContext.Provider>
  );
};
