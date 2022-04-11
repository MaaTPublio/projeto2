window.onload = function(){
    const menuBtn = document.querySelector(".burger")
    let menuOpen = false;
  
    menuBtn.addEventListener("click", function(event) {
    
    if(!menuOpen){
    menuBtn.classList.add("open");
    menuOpen = true;
    console.log("teste")
    }
    else{
    menuBtn.classList.remove("open");
    menuOpen = false;
    }})
  }

 /* window.onload = function(){
    const burger = document.getElementById("burgerSH")
    burger.addEventListener("click", function(event){
    burgerSH.style.display = "flex";
  }
  } */