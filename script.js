let toggleBtn = document.querySelector("#toggle-btn");
let closeLists = document.querySelector("#close");
let listItems = document.querySelector(".list-items");
let listItemsIcon = document.querySelector(".nav_list_items i");
let isClicked = false;
toggleBtn.addEventListener("click", () => {
  isClicked ? hideList() : showList();
});

let showList = () => {
  isClicked = true;
  listItems.style.display = "flex";
  listItemsIcon.classList.replace("bx-menu", "bx-x");
};

let hideList = () => {
  isClicked = false;
  listItems.style.display = "none";
  listItemsIcon.classList.replace("bx-x", "bx-menu");
};


// if(listItems.style.display === "flex"){
//   showList();
// }