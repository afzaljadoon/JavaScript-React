const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes") || ""; 

 
  document.querySelectorAll(".input-box").forEach(note => {
    note.onkeyup = function () {
      updateStorage();
    };
  });

  document.querySelectorAll(".notes-container img").forEach(img => {
    img.addEventListener("click", function () {
      img.parentElement.remove();
      updateStorage();
    });
  });
};

showNotes(); 


const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

 
  inputBox.onkeyup = function () {
    updateStorage();
  };

 
  img.addEventListener("click", function () {
    inputBox.remove();
    updateStorage();
  });

  updateStorage(); 
});


notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
