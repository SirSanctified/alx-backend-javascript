export default function cleanSet(set, startString) {
  let result = '';
  if (startString.length > 0) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        result += `${value.slice(startString.length)}-`;
      }
    });
  }
  return result.slice(0, -1);
}
