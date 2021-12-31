const array = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
  return array.filter((val) => {
    return filterField !== val.field;
  });
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);
