import React, { useContext } from "react";
import GridCell from "./GridCell";
import { GridContext } from "../context/GridContext";

const Grid = () => {
  const { activeCount } = useContext(GridContext);

  return (
    <div className="container">
      <h2>Count: {activeCount}</h2>
      <div className="grid">
        {[0, 1, 2, 3].map((index) => (
          <GridCell key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
