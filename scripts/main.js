 function sidekick ( element, className) {

  var numSteps = 1000;
  var boxElement;
  
  window.addEventListener("load", function(event) {
    
    boxElement = [...document.getElementsByClassName(element)];
  
    createObserver();
  }, false);
  
  function createObserver() {
      var observer;
      var options = {
  
        root: null,
        rootMargin: '100px 100px 100px 100px',
        threshold: buildThresholdList()
       
      };
    
      observer = new IntersectionObserver(handleIntersect, options);
      boxElement.forEach(item=>observer.observe(item));
     
    }
  
  
    function buildThresholdList() {
      var thresholds = [];
    
      for (var i=1.0; i<=numSteps; i++) {
        var ratio = i/numSteps;
        thresholds.push(ratio);
      }
    
      thresholds.push(0);
      return thresholds;
    }
  
  
    function handleIntersect ( entries, observer) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio > 0) {
        entry.target.classList.add(className);
        } else {
         entry.target.classList.remove(className);
         
        }
      
      }
   
    ); 
    }
  }
    
    


document.addEventListener("DOMContentLoaded", function(){
  if (!('ontouchstart' in document.documentElement)){
    var hoverControls = document.querySelectorAll(".hovercontroll");
    var overlay = document.querySelector(".overlay");
    var overlayImage = overlay.querySelector("img");
    var description = document.querySelector('.description');
    var timeout=null;

    for(var i=0; i<hoverControls.length; i++){
      hoverControls[i].addEventListener("mouseover", function(e){
        
        timeout && clearTimeout(timeout);
        overlayImage.src = "";
        overlayImage.src = e.target.getAttribute("data-overlay");
        overlay.style.visibility = "visible";
        overlay.classList.add("overlay-visible");
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
  }
  window.location.hash ='Home';
  sidekick('left','fancy-l');
  sidekick('right','fancy-r');
  });