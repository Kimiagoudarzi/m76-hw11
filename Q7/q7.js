function build(labels, array, container) {
  let table = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  let tableRow = document.createElement("tr");
  for (let i = 0; i < labels.length; i++) {
    let theadTh = document.createElement("th");
    theadTh.innerHTML = labels[i];
    tableRow.appendChild(theadTh);
  }
  tableHead.appendChild(tableRow);
  table.appendChild(tableHead);

  for (let i = 0; i < array.length; i++) {
    let tbodyTr = document.createElement("tr");
    tbodyTr.classList.add("style");
    for (let j = 0; j < labels.length; j++) {
      let tbodyTd = document.createElement("td");
      tbodyTd.innerHTML = array[i][labels[j].toLowerCase()];
      tbodyTr.appendChild(tbodyTd);
    }
    tableBody.appendChild(tbodyTr);
  }
  table.appendChild(tableBody);
  table.style.width = "350px";
  container.appendChild(table);

  let styleRow1 = document.getElementsByClassName("style");
  array.forEach((element, index) => {
    if (element.age < 10) {
      styleRow1[index].style.backgroundColor = "yellow";
    }
    if (element.age >= 10 && element.age < 40) {
      styleRow1[index].style.backgroundColor = "green";
    }
    if (element.age >= 40 && element.age < 80) {
      styleRow1[index].style.backgroundColor = "red";
    }
    if (element.age >= 80) {
      styleRow1[index].style.backgroundColor = "blue";
    }
  });
}

let array = [
  { name: "kimia", age: 9, country: "United States" },
  { name: "fatemeh", age: 31, country: "United Kingdom" },
  { name: "maedeh", age: 58, country: "Canada" },
  { name: "melika", age: 20, country: "Spain" },
];

let l = array[0];
let labels = Object.keys(l);

build(labels, array, document.getElementById("table"));
