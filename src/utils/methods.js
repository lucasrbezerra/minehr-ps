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

export const makeObjectSorted = (keys, values) => {
  var obj = {};
  var vet = [];
  const professions_sorted = [];
  const avarages_salary_sorted = [];
  const result = [];

  for (let i = 0; i < keys.length; i++) {
    obj["prof"] = keys[i];
    obj["val"] = values[i];
    vet.push(obj);
    obj = {};
  }

  vet.sort(function (a, b) {
    return a["val"] - b["val"];
  });

  for (let i in vet) {
    professions_sorted.push(vet[i].prof);
    avarages_salary_sorted.push(vet[i].val);
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
