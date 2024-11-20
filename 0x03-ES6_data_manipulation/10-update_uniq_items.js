export default function updateUniqueItems(myMap) {
  // edge case
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  // update quantity from 1 to 100
  for (const [key, value] of myMap) {
    if (value === 1) {
      myMap.set(key, 100);
    }
  }
  return myMap;
}
