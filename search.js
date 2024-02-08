let response = await fetch("./grades.json");
const json = await response.json();
console.log(json["1"]["name"]);
