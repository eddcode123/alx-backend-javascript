export default function hasValuesFromArray(set, array) {
  // iterate over each element in array and check if it exit in set
  const check = [];
  for (const element of array) {
    if (set.has(element)) {
      check.push(true);
    } else {
      check.push(false);
    }
  }
  if (check.includes(false)) {
    return false;
  }
  return true;
}
