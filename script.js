//Hamburger menu//


const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    mainMenu.classList.remove("active");
}))


//Scroll Indicator//


const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


//Button to get to top//


const mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//Slider//

const sliderBtn= document.getElementsByClassName("slider-btn");
const slide = document.getElementById("slide");
const arrowLeft = document.getElementById("arrow1");
const arrowRight = document.getElementById("arrow2");

let count = 0;

arrowRight.addEventListener('click',() => {
  if (count < 4) {
    count++;
  } else {
    return count;
  }
  
  for(let i = 0; i < 5; i++) {
    sliderBtn[i].classList.remove("active")
  }
  sliderBtn[count].classList.add("active"); 
  slide.style.transform = `translateX(-${count*20}%)`;
})

arrowLeft.addEventListener('click',() => {
  if (count > 0) {
    count--;
  } else {
    return count;
  }
  
  for(let i = 0; i < 5; i++) {
    sliderBtn[i].classList.remove("active")
  }
  sliderBtn[count].classList.add("active"); 
  slide.style.transform = `translateX(-${count*20}%)`;
})

sliderBtn[0].onclick = function() {
  slide.style.transform = "translateX(0px)";
  for(i=0;i<5;i++) {
    sliderBtn[i].classList.remove("active")
  }
  this.classList.add("active");
  return count = 0;
}
sliderBtn[1].onclick = function() {
  slide.style.transform = "translateX(-20%)";
  for(i=0;i<5;i++) {
    sliderBtn[i].classList.remove("active")
  }
  this.classList.add("active");
  return count = 1;
}
sliderBtn[2].onclick = function() {
  slide.style.transform = "translateX(-40%)";
  for(i=0;i<5;i++) {
    sliderBtn[i].classList.remove("active")
  }
  this.classList.add("active");
  return count = 2;
}
sliderBtn[3].onclick = function() {
  slide.style.transform = "translateX(-60%)";
  for(i=0;i<5;i++) {
    sliderBtn[i].classList.remove("active")
  }
  this.classList.add("active");
  return count = 3;
}
sliderBtn[4].onclick = function() {
  slide.style.transform = "translateX(-80%)";
  for(i=0;i<5;i++) {
    sliderBtn[i].classList.remove("active")
  }
  this.classList.add("active");
  return count = 4;
}