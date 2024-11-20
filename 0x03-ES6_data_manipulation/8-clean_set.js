export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  // iterate each element of the set
  let str = '';
  for (const element of set) {
    // check if element has the startstring
    if (element.slice(0, startString.length) === startString) {
      str += element.slice(startString.length);
      str += '-';
    }
  }
  return str.slice(0, str.length - 1);
}
