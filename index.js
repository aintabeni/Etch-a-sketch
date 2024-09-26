let btn = document.createElement("button");
btn.textContent = 'Reset the number of squares';

let container= document.querySelector(".container")
container.style="display:flex; flex-direction:column; height:500px; width:500px;"
document.body.insertBefore(btn,container)

btn.addEventListener("click", function(){
    let squares= parseInt(prompt("Please add the grid size"));
    while(isNaN(squares)|| squares<1 || squares >100){
        alert("Invalid input");
        squares= parseInt(prompt("Please add the grid size"));
    }
for(i=0 ; i<squares ; i++){
    let divs = document.createElement("div")
    container.appendChild(divs);
    divs.setAttribute("class","flex")
    divs.style = "display:flex; flex:1 1 auto"
    for(j=0 ; j<squares ; j++){
        let div = document.createElement("div")
        divs.appendChild(div);
        div.style = "flex:1 1 auto; border:1px solid black;"
        div.addEventListener("mouseover",()=> div.style.backgroundColor="black")
    }
}
})