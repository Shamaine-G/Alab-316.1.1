let menuLinks = [

{text: 'about', href: '/about'},
{text: 'catalog', href: '/catalog'},
{text: 'orders', href: '/orders'},
{text: 'account', href: '/account'},
];


let mainEl = document.querySelector("main");
console.log(mainEl);
const mainbg = "#4a4e4d";
mainEl.style.backgroundColor = mainbg;

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.

const h1 = document.createElement("h1");
// console.log(h1)

h1.textContent = "DOM Manipulation";
console.log(h1);

mainEl.appendChild(h1);


h1.classList.add("flex-ctr")

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%"

const topColor = "#0e9aa7";
topMenuEl.style.backgroundColor = topColor;

topMenuEl.classList.add("flex-ctr");

menuLinks.forEach((link) => {
    let aElement = document.createElement("a")
    aElement.href = link.href 
    aElement.textContent = link.text
    topMenuEl.appendChild(aElement)
})


