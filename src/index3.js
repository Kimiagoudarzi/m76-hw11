function color() {
//   let p2 = document.getElementById("part2");
//   p2.style.backgroundColor = "#DBEAFE";

//   let p3 = document.getElementById("part3");
//   p3.style.backgroundColor = "#F3E8FF";

//   let p4 = document.getElementById("part4");
//   p4.style.backgroundColor = "#DCFCE7";

//   let p5 = document.getElementById("part5");
//   p5.style.backgroundColor = "#FEE2E2";

//   let p6 = document.getElementById("part6");
//   p6.style.backgroundColor = "#FEF9C3";

//   let p7 = document.getElementById("part7");
//   p7.style.backgroundColor = "#E0E7FF";

//   let p8 = document.getElementById("part8");
//   p8.style.backgroundColor = "#F9FAFB";

//   let p9 = document.getElementById("part9");
//   p9.style.backgroundColor = "#1F2937";


let colors = ['#ffff','#DBEAFE',"#F3E8FF","#DCFCE7","#FEE2E2","#FEF9C3","#E0E7FF","#F9FAFB","#1F2937"];

 let trees = document.querySelectorAll('tbody tr');

 trees.forEach((el,index)=>{
    el.style.backgroundColor = colors[index];
 })
}

color();


function myDelete() {
  let d = document.querySelectorAll(".myTable tr");
  d.forEach((el, index) => {
    if (index <= 5 && index > 0) {
      el.innerHTML = null;
    }
  });
}

let tbody = document.getElementsByTagName("tbody");
function myAdd3() {
  for(let j=0; j<3; j++){
    let tree = document.createElement("tr");
    tree.classList.add("border-b", "boder-gray-900");
    tbody[0].appendChild(tree);
    for (let i = 0; i < 3; i++) {
      let trTd = document.createElement("td");
      trTd.classList.add(
        "text-sm",
        "text-dark",
        "font-medium",
        "px-6",
        "py-4",
        "whitespace-nowrap"
      );
      trTd.textContent = "test";
      tree.appendChild(trTd);
      console.log(trTd);
    }
  }
}
