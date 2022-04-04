let searchInput = document.querySelector(".search-input")
let searchWrapper = document.querySelector(".search-wrapper")
let searchIcon = document.querySelector(".search-icon")
let Item = document.querySelectorAll(".sidebar__list")
const elForm = document.querySelector('.contact-form');
const serForm = document.querySelector('.servises__form');

const n = document.querySelector('#name')
const eml = document.querySelector('#email')
const c = document.querySelector('#company')
const t = document.querySelector('#phone')




const elEmailInput = document.querySelector('.email-input');
const elPasswordInput = document.querySelector('.password-input');


serForm.addEventListener('submit', e=>{
    e.preventDefault();
    
    const Name = serForm[0].value;
    const Email = serForm[1].value;
    const Company = serForm[2].value;
    const Phone = serForm[3].value;
    
    fetch('https://supersiteuz.herokuapp.com', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: Name, 
        email: Email,
        company: Company,
        email: Phone
    })
}).then(res => res.json()).then(data => {
    if(data){
       alert(data)
    }else{
      console.log("error");
    }
})
})






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




  

  
