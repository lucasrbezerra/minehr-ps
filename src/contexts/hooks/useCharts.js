import { useState, useEffect } from "react";
import {
  getUniqueValues,
  filterByField,
  getAverage,
  makeObjectSorted,
  getDataArrayScatter,
} from "../../utils/methods";

export const useCharts = (initialValues) => {
  const [scatterData, setScatterData] = useState(initialValues.scatterData);
  const [barData, setBarData] = useState(initialValues.barData);
  const [data, setData] = useState(initialValues.data);

  const getScatter = () => {
    const professions = getUniqueValues(data, "nmefet");
    const series = [];

    for (let prof of professions) {
      let new_object = filterByField(data, "nmefet", prof);
      let obj = {
        name: prof,
        data: getDataArrayScatter(new_object, "carga_hora", "remuner"),
      };
      series.push(obj);
    }

    const new_ScatterData = {
      series: series,
    };
    setScatterData(new_ScatterData);
  };

  const getBar = () => {
    const professions = getUniqueValues(data, "nmefet");
    const avarages_salary = [];

    for (let prof of professions) {
      let new_object = filterByField(data, "nmefet", prof);
      let avarage = getAverage(new_object, "remuner");
      avarages_salary.push(avarage);
    }

    const val_sorted = makeObjectSorted(professions, avarages_salary);

    const new_barData = {
      series: [{ data: val_sorted[0], name: "Salário em Real" }],
      categories: val_sorted[1],
    };

    setBarData(new_barData);
  };

  useEffect(() => {
    getScatter();
    getBar();
  }, [data]);

  return {
    scatterData,
    barData,
  };
};
