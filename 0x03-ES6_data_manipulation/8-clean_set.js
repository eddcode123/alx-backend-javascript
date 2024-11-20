export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  // iterate each element of the set
  const str = [];
  for (const element of set) {
    // check if element has the startstring
    if (element.startsWith(startString)) {
      str.push(element.slice(startString.length));
    }
  }
  return str.join('-');
}
