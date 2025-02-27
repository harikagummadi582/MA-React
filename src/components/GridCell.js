import React, { useContext } from "react";
import { GridContext } from "../context/GridContext";

const GridCell = ({ index }) => {
  const { grid, toggleCell } = useContext(GridContext);
  
  return (
    <div
      className="grid-cell"
      style={{ backgroundColor: grid[index] ? "black" : "white" }}
      onClick={() => toggleCell(index)}
    ></div>
  );
};

export default GridCell;
