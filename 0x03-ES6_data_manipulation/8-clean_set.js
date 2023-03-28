export default function cleanSet(set, startString) {
  const result = [];
  if (startString !== '') {
    set.forEach((element) => {
      if (element.startsWith(startString)) {
        result.push(element.slice(startString.length));
      }
    });
  }
  return result.join('-');
}
