let btn = document.getElementById("btn");
let colors = ["red", "green", "blue", "yellow"]; 
let colorIndex = 0;

btn.addEventListener("click", () => {
   
    document.body.style.backgroundColor = colors[colorIndex];

    
    colorIndex = (colorIndex + 1) % colors.length;
});




