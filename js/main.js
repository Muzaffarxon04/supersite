let searchInput = document.querySelector(".search-input")
let searchWrapper = document.querySelector(".search-wrapper")
let searchIcon = document.querySelector(".search-icon")
let Item = document.querySelectorAll(".sidebar__list")

Item.forEach(e => {
e.addEventListener("click", (u) => {
    w3_close()
    })
})

searchInput.addEventListener("keyup", (e) => {
   if (e.target.value) {
    searchIcon.style.display = "none";
   }else{
    searchIcon.style.display = "block";

   }
})





function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }