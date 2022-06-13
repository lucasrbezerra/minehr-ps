import React, { createContext } from "react";
import salary from "../imports/salary.json";
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
  data: salary,
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
