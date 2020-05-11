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
        entry.target.classList.add(className);//tu ewentualnie mozna by dodać opóźnienie jakiś timeout czy co
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
  
  
  if (is_touch_device){
    var projectsContainer = document.querySelector(".projects-container-left-padded");
    projectsContainer.classList.remove("project-container-top-padded");
  }
  window.location.hash ='Home';
  sidekick('left','fancy-l');
  sidekick('right','fancy-r');

  });

  window.addEventListener("DOMContentLoaded", (event) => {
    var granimInstance = new Granim({
      element: 'canvas',
      direction: 'top-bottom',
      isPausedWhenNotInView: true,
      image : {source:'https://raw.githubusercontent.com/Kiszuriwalilibori/portfolio/master/project_images/moon.jpg',
              blendingMode: 'multiply'
      },
      states : {
          "default-state": {
              gradients: [
                  ['#29323c', '#485563'],
                  ['#a35a00', '#556270'],
                  ['#80d3fe', '#7ea0c4'],
                  ['#f0ab51', '#eceba3']
              ],
              transitionSpeed: 4000
          }
      }
  })
  

});
window.addEventListener("load", (event) => {
const x = document.getElementById('loader-wrapper');
x.remove();})

$(document).ready(function(){
  console.log('script');
 
  animateDiv('.ufo');
  
});

function makeNewPosition(){
  
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
    animateDiv(myclass);        
  });
  
};


function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
} 

