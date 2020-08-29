var $ = require("./jquery.js");
var {prepareSideShiftingOnVisible} = require('./prepareSideShiftingOnVisible');
var {prepareAnimation} =require('./prepareAnimation.js');
var {prepareOverlay} = require('./prepareOverlay');
var {removeLoader} =require('./removeLoader');

document.addEventListener("DOMContentLoaded", prepareSideShiftingOnVisible);
document.addEventListener("DOMContentLoaded",  prepareAnimation(".ufo",$));
document.addEventListener("DOMContentLoaded", prepareOverlay);
window.addEventListener("load", removeLoader);
document.addEventListener("DOMContentLoaded", (event) => {
  var granimInstance = new Granim({
    element: "canvas",
    direction: "top-bottom",
    isPausedWhenNotInView: true,
    image: { source: "https://raw.githubusercontent.com/Kiszuriwalilibori/Portfolio_Archiwalne_2/master/project_images/moon.jpg", blendingMode: "multiply" },
    states: {
      "default-state": {
        gradients: [
          ["#29323c", "#485563"],
          ["#a35a00", "#556270"],
          ["#80d3fe", "#7ea0c4"],
          ["#f0ab51", "#eceba3"],
        ],
        transitionSpeed: 4000,
      },
    },
  });
});
