import React, { createContext } from "react";
import { useCharts } from "./hooks";

const initialValues = {
  barData: {
    series: [
      {
        data: [],
        name: "",
      }
    ],
    categories: [],
  },
  scatterData: {
    series: [],
  },
};

const ChartsContext = createContext(initialValues);

const ChartsProvider = ({ children }) => {
  const { scatterData, barData, getBar } = useCharts(initialValues);

  return (
    <ChartsContext.Provider
      value={{
        scatterData,
        barData,
        getBar,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};

export { ChartsContext, ChartsProvider };
