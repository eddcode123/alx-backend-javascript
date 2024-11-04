export default function appendToEachArrayValue(array, appendString) {
  const arry = [];
  for (const value of array.entries()) {
    arry.push(appendString + value);
  }

  return arry;
}
