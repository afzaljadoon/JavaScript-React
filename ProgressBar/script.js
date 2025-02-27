let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
 counter += 1;
 number.innerHTML = counter + "%";
})