//Question 2
const studentNames = '{"Name" : "Kimbowa Yasin", "Age" : 20, "married" : false}';

const convertToJson = JSON.parse(studentNames);

console.log(JSON.stringify(convertToJson, null, 4));