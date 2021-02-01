document.body.style.backgroundColor = "#849483"

let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

document.addEventListener("keydown", function(event) {
  console.log(event.key)
  if (event.key === "ArrowDown" || event.key.toUpperCase() === "S") {
      if (square.style.top !== "300px") {
        square.style.top = `${parseInt(square.style.top) + 10}px`
       }
  } else if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
      if (square.style.top !== "0px") {
        square.style.top = `${parseInt(square.style.top) - 10}px`
      } 
  } else if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
      if (square.style.left !== "300px") {
        square.style.left = `${parseInt(square.style.left) + 10}px`
      } 
  } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      if (square.style.left !== "0px") {
        square.style.left = `${parseInt(square.style.left) - 10}px`
      } 
  }
});

square.addEventListener("click", function (event) {
  square.style.backgroundColor = (`rgb(${(Math.floor(Math.random() * 255))}, ${(Math.floor(Math.random() * 255))}, ${(Math.floor(Math.random()* 255))})` )
})