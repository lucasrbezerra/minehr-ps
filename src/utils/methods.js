export const getUniqueValues = (json, field) => {
  var lookup = {};
  var data = json;
  var result = [];

  for (var item, i = 0; (item = data[i++]); ) {
    var select_field = item[field];

    if (!(select_field in lookup)) {
      lookup[select_field] = 1;
      result.push(select_field);
    }
  }

  return result;
};

export const filterByField = (json, field, value) => {
  var data = json;
  return data.filter((item) => item[field] === value);
};

export const getAverage = (json, field) => {
  var data = json;
  var total = 0;

  for (const item of data) total += item[field];

  return Math.round(total / data.length);
};

export const getObjectSorted = (keys, values) => {
  var vet = [];
  const professions_sorted = [];
  const avarages_salary_sorted = [];
  const result = [];

  vet = keys.map((key, index) => {
    return { profession: key, average: values[index] };
  });

  vet.sort(function (a, b) {
    return a["average"] - b["average"];
  });

  for (let item of vet) {
    professions_sorted.push(item["profession"]);
    avarages_salary_sorted.push(item["average"]);
  }

  result.push(avarages_salary_sorted);
  result.push(professions_sorted);

  return result;
};

export const getDataArrayScatter = (values, fieldX, fieldY) => {
  var axis = [];
  const data = [];
  for (let item of values) {
    axis.push(item[fieldX]);
    axis.push(item[fieldY]);
    data.push(axis);
    axis = [];
  }

  return data;
};

export const getProfessionsChecked = (values, mode) => {
  return values.map((profession) => {
    return { profession: profession, checked: mode };
  });
};

export const getProfessionsFiltered = (checkeds) => {
  return checkeds.flatMap((values) =>
    values.checked ? [values.profession] : []
  );
};
