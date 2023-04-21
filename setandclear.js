let myContainer = document.getElementById("myContainer");
myContainer.classList.add("text-center","d-flex","flex-column","justify-content-center","p-5")

let container = document.createElement("div");
let heading = document.createElement("h1");
heading.textContent = "Clear the counter timer";
heading.style.fontSize = "64px";
heading.style.fontFamily =  "Roboto";
heading.style.fontWeight = "700";
container.appendChild(heading);
let resultPara = document.createElement("p");
resultPara.style.fontSize = "48px";
resultPara.style.fontWeight = "bold";
resultPara.textContent = "0"
container.appendChild(resultPara);
let buttonEl = document.createElement("button");
buttonEl.classList.add("btn","btn-danger");
buttonEl.textContent = "Clear";
container.appendChild(buttonEl);
myContainer.appendChild(container);

let id;
let count = 0;

let uniqueId = setInterval(function(){
    resultPara.textContent = count + 1 
    count += 1;
},1000)

buttonEl.onclick = ()=>{
    clearInterval(uniqueId)
    resultPara.textContent = "Count Cleared";
    resultPara.style.color = "green"
}