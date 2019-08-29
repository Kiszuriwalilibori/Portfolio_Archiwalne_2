

document.addEventListener("DOMContentLoaded", function(){
  console.log('loaded');
    var hoverControls = document.querySelectorAll(".hovercontroll");
    var overlay = document.querySelector(".overlay");
    var overlayImage = overlay.querySelector("img");
    var description = document.querySelector('.description');
    var timeout=null;

    for(var i=0; i<hoverControls.length; i++){
      hoverControls[i].addEventListener("mouseover", function(e){
        if(timeout){
          clearTimeout(timeout);
        }
        overlayImage.src = "";
        overlayImage.src = e.target.getAttribute("data-overlay");
        overlay.style.visibility = "visible";
        overlay.classList.add("overlay-visible");
        //console.log(e.target);
        description.style.visibility = "visible";
        description.classList.add("description-visible");
        description.innerHTML= e.target.getAttribute("data-description");
        
      });
      hoverControls[i].addEventListener("mouseout", function(e){
            overlay.classList.remove("overlay-visible"); 
            description.classList.remove("description-visible");
        timeout = setTimeout(function(){
            overlay.style.visibility = "hidden"; 
            description.style.visibilty = "hidden" ;
        }, 200)
        
      });
    }
  window.location.hash ='Home';
  });