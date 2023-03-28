export default function cleanSet(set, startString) {
  let result = '';
  if (typeof startString === 'string' && startString.length > 0 && set instanceof Set) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        result += `${value.slice(startString.length)}-`;
      }
    });
  }
  return result.slice(0, -1);
}
