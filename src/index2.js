function color() {
    let p2 = document.getElementById('part2');
    p2.style.backgroundColor = "#DBEAFE";

    let p3 = document.getElementById('part3');
    p3.style.backgroundColor = "#F3E8FF";

    let p4 = document.getElementById('part4');
    p4.style.backgroundColor = "#DCFCE7";

    let p5 = document.getElementById('part5');
    p5.style.backgroundColor = "#FEE2E2";

    let p6 = document.getElementById('part6');
    p6.style.backgroundColor = "#FEF9C3";

    let p7 = document.getElementById('part7');
    p7.style.backgroundColor = "#E0E7FF";

    let p8 = document.getElementById('part8');
    p8.style.backgroundColor = "#F9FAFB";
    
    let p9 = document.getElementById('part9');
    p9.style.backgroundColor = "#1F2937";
}
color();

function myDelete(){
    let d = document.querySelectorAll('.myTable tr');
    d.forEach((el,index)=>{
        if(index<=5 && index>0){
            el.innerHTML=null;
        }
    })
}
