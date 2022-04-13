window.onload = function(){
    const menuBtn = document.querySelector(".burger")
    let menuOpen = false;
  
    menuBtn.addEventListener("click", function(event) {
    
    if(!menuOpen){
    menuBtn.classList.add("open");
    menuOpen = true;
    dropmenu();
    }
    else{
    menuBtn.classList.remove("open");
    menuOpen = false;
    hidemenu();
    }})
  }

  
  function dropmenu(){
      const menudrop = document.getElementById("navOpt");
      menudrop.style.display="flex";
  }
  function hidemenu(){
    const menudrop = document.getElementById("navOpt");
      menudrop.style.display="none";
  }
 /* window.onload = function(){
    const burger = document.getElementById("burgerSH")
    burger.addEventListener("click", function(event){
    burgerSH.style.display = "flex";
  }
  } */