export default function hasValuesFromArray(set, array) {
  // iterate over each element in array and check if it exit in set
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
