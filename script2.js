nav_menu = document.getElementById("nav_menu");
mynav = document.getElementById("mynav");
nav_menu.addEventListener("click",function(){
  if (mynav.style.display == "flex") {
    mynav.style.display = "none";
    nav_menu.style.marginRight = "20%";
  }
  else{
    mynav.style.display = "flex";
    nav_menu.style.marginLeft = "-3%";
  }
  
});
function checkScreenWidth() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth > 950) {
      mynav.style.display = "block";
      nav_menu.style.display = "none";
  } else {
    nav_menu.style.display = "block";
    mynav.style.display = "none";
  }
  if(mynav.style.display=="none" && screenWidth<=900){
      nav_menu.style.display="block";
  }
}
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

searchBtn = document.getElementById("searchBtn");
search_input = document.querySelector(".search_input");

searchBtn.addEventListener("click",function(){
  search_input.style.opacity = "1";
  search_input.style.transform = "translateX(0)";
  // search_input.style.display = "flex";
  // search_input.classList.add("activeSearch");

});


const slider = document.querySelectorAll('.slider');

const prevBtn = document.querySelectorAll('.pbtnNav');
const nextBtn = document.querySelectorAll('.nbtnNav');

let currentIndex = 0;
let itemsPerPage = calculateItemsPerPage();

function calculateItemsPerPage() {
  if (window.innerWidth < 600) {
    return 3;
  } else if (window.innerWidth < 700) {
    return 4;
  } else if (window.innerWidth < 900) {
    return 5;
  } else {
    return 6;
  }
}

function updateSlider(i) {
  const slideWidth = 100 / itemsPerPage;
    slider[i].style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  
}
for (let i = 0; i < 4; i++) {
    prevBtn[i].addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSlider(i);
        }
      });
}

for (let i = 0; i < 4 ;i++) {
    nextBtn[i].addEventListener('click', () => {
        const numSlides = 10;
        if (currentIndex < numSlides - itemsPerPage) {
          currentIndex++;
          updateSlider(i);
        }
      });
}


// Handle window resize to adjust items per page
window.addEventListener('resize', () => {
  itemsPerPage = calculateItemsPerPage();
  for (let i = 0; i < 4; i++) {
    updateSlider(i);
    
  }
  
});

// Initial setup
updateSlider(0);
