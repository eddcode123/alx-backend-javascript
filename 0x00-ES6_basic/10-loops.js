export default function appendToEachArrayValue(array, appendString) {
  for (const [index, item] of array.entries()) {
    array[index] = appendString + item;
  }
  return array;
}
