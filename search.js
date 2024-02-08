(async () => {
  let response = await fetch("./grades.json");
  const json = await response.json();
  let searchVal = URLSearchParams.get("keyword");
  console.log(json[searchVal]["name"]);
})();
