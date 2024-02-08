let jsonFile = 0;
fetch("./grades.json").then((response) => response.json()).then((json) => jsonFile = json);
//var jsonFile = ("grades.json");
console.log(jsonFile[1]);
