;
var student1 = {
    firstName: 'Pritchard',
    lastName: 'Mambambo',
    age: 25,
    location: 'Masvingo'
};
var student2 = {
    firstName: 'Promise',
    lastName: 'Mambambo',
    age: 21,
    location: 'Kwekwe'
};
var studentList = [student1, student2];
var body = document.querySelector('body');
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
thead.innerHTML = "\n<tr>\n  <th>First Name</th>\n  <th>Last Name</th>\n  <th>Age</th>\n  <th>Location</th>\n</tr>\n";
var tableData;
studentList.forEach(function (student) {
    tableData += "\n      <tr>\n        <td>" + student.firstName + "</td>\n        <td>" + student.lastName + "</td>\n        <td>" + student.age + "</td>\n        <td>" + student.location + "</td>\n      </tr>\n    ";
});
tbody.innerHTML = tableData;
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
//# sourceMappingURL=main.js.map