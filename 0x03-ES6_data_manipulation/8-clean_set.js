export default function cleanSet(set, startString) {
  const result = [];
  if (startString !== '') {
    set.forEach((element) => {
      const elem = element.toString();
      if (elem.startsWith(startString)) {
        result.push(elem.slice(startString.length));
      }
    });
  }
  return result.join('-');
}
