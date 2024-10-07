const body = document.querySelector("body")

const div = document.createElement("div");
div.style.width = "300px";
div.style.height = "300px";
div.style.border = "1px solid black"

body.appendChild(div);

//zad1
const p = document.createElement("p");
p.innerHTML = "txt";
div.appendChild(p);


//zad3
const butt3nv = document.createElement("button");
butt3nv.innerHTML = "schowaj p";
p.appendChild(butt3nv);
butt3nv.addEventListener("click", ()=> {
    p.style.visibility = "hidden";
})


//zad2
const butt1 = document.createElement("button");
const butt2 = document.createElement("button");
butt1.innerHTML = "okey";
butt2.innerHTML = "nie okey";
body.appendChild(butt1);
body.appendChild(butt2);
butt1.addEventListener("click", ()=> {
    div.style.backgroundColor = "green";
})
butt2.addEventListener("click", ()=> {
    div.style.backgroundColor = "red";
})


//zad4
const inp = document.createElement("input");
const butt4 = document.createElement("button");
butt4.innerHTML = "Dodaj"
const ul = document.createElement("ul");
body.appendChild(inp);
body.appendChild(butt4);
body.appendChild(ul);
butt4.addEventListener("click", ()=> {
    let inpv = document.querySelector("input").value;
    console.log(inpv);
    const li = document.createElement("li");
    li.innerHTML = inpv;
    ul.appendChild(li)
})


//zad5
const inp2 = document.createElement("input");
const butt5 = document.createElement("button");
butt5.innerHTML = "Przejdź"
body.appendChild(inp2);
body.appendChild(butt5);
butt5.addEventListener("click", ()=> {
    const a = document.createElement("a");
    a.href = `https://${inp2.value}/`;                    //a.setAttribut("href", inp2.value)
    a.innerHTML = inp2.value;
    a.target = "_blank";
    body.appendChild(a);
})