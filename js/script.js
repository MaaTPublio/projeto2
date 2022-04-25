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
      var menudrop = document.getElementById("navOpt");
      menudrop.style.display="flex";
  }
  function hidemenu(){
      var menudrop = document.getElementById("navOpt");
      menudrop.style.display="none";
  }
 /* window.onload = function(){
    const burger = document.getElementById("burgerSH")
    burger.addEventListener("click", function(event){
    burgerSH.style.display = "flex";
  }
  } */

window.addEventListener('resize', verifTam);

function verifTam(){
  var menudrop = document.getElementById("navOpt");
  var largura = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if (largura > 999)
    menudrop.style.display="flex";
    else
    menudrop.style.display="none";
}
