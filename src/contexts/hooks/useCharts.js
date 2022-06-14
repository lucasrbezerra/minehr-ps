import { useState, useEffect } from "react";
import {
  getUniqueValues,
  filterByField,
  getAverage,
  getObjectSorted,
  getDataArrayScatter,
  getProfessionsChecked,
  getProfessionsFiltered
} from "../../utils/methods";

export const useCharts = (initialValues) => {
  const [data, setData] = useState(initialValues.data);
  const [scatterData, setScatterData] = useState(initialValues.scatterData);
  const [barData, setBarData] = useState(initialValues.barData);
  const [professions, setProfessions] = useState(initialValues.professions);
  const [professionsFilter, setProfessionsFilter] = useState(initialValues.professionsFilter);

  const getProfessions = () => {
    const profs = getUniqueValues(data, "nmefet");
    const prof_checks = getProfessionsChecked(profs, true);
    setProfessions(profs);
    setProfessionsFilter(prof_checks);
  };

  const getScatter = () => {
    const series = [];

    for (let profession of professions) {
      let professions_filtered = filterByField(data, "nmefet", profession);
      let object = {
        name: profession,
        data: getDataArrayScatter(
          professions_filtered,
          "carga_hora",
          "remuner"
        ),
      };
      series.push(object);
    }

    setScatterData({ series: series });
  };

  const getBar = () => {
    const avarages_salary = [];

    for (let profession of professions) {
      let professions_filtered = filterByField(data, "nmefet", profession);
      let avarage = getAverage(professions_filtered, "remuner");
      avarages_salary.push(avarage);
    }

    const sorted_by_avarage = getObjectSorted(professions, avarages_salary);

    const new_barData = {
      series: [{ data: sorted_by_avarage[0], name: "Salário em Real" }],
      categories: sorted_by_avarage[1],
    };

    setBarData(new_barData);
  };

  const handleFilter = (index) => {
    let professions_updated = [...professionsFilter];
    professions_updated[index]['checked'] = !professions_updated[index]['checked'];
    setProfessionsFilter(professions_updated);
    const professions_filtered = getProfessionsFiltered(professions_updated, professions);
    setProfessions(professions_filtered);
  }

  useEffect(() => {
    getProfessions();
  }, [data]);

  useEffect(() => {
    getScatter();
    getBar();
  }, [data, professions]);

  return {
    scatterData,
    barData,
    professionsFilter,
    handleFilter
  };
};
