import React, { createContext } from "react";
import { useCharts } from "./hooks";
import salary from "../imports/salary.json";

const initialValues = {
  barData: {
    series: [{ data: [], name: "" }],
    categories: [],
  },
  scatterData: {
    series: [],
  },
  data: salary,
  professions: [],
  professionsFilter: [],
};

const ChartsContext = createContext(initialValues);

const ChartsProvider = ({ children }) => {
  const { scatterData, barData, professionsFilter, handleFilter } =
    useCharts(initialValues);

  return (
    <ChartsContext.Provider
      value={{
        scatterData,
        barData,
        professionsFilter,
        handleFilter
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};

export { ChartsContext, ChartsProvider };
