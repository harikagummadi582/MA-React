import React from "react";
import { GridProvider } from "./context/GridContext";
import Grid from "./components/Grid";
import "./styles.css";

const App = () => {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  );
};

export default App;
