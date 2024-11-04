export default function appendToEachArrayValue(array, appendString) {
  const arry = [];
  for (const value of array) {
    arry.push(appendString + value);
  }

  return arry;
}
