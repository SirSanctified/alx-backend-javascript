export default function createIteratorObject(reportObject) {
  const employees = Object.values(reportObject.allEmployees);
  const iterator = {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < employees.length) {
            return {
              value: employees[i + 1],
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
  return iterator;
}
