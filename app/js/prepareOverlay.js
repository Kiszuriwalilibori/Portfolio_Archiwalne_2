
module.exports = {
  prepareOverlay: function () {


    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    


    if (!("ontouchstart" in document.documentElement)) {
      var hoverControls = document.querySelectorAll(".hover_controller");
      var overlay = document.querySelector(".overlay");
      var overlayImage = overlay.querySelector("img");
      var description = document.querySelector(".description");
      var timeout = null;

      for (var i = 0; i < hoverControls.length; i++) {
        hoverControls[i].addEventListener("mouseover", function (e) {
          timeout && clearTimeout(timeout);
          overlayImage.src = "";
          overlayImage.src = e.target.getAttribute("data-overlay");
          overlay.style.visibility = "visible";
          overlay.classList.add("overlay-visible");
          description.style.visibility = "visible";
          description.classList.add("description-visible");
          description.innerHTML = e.target.getAttribute("data-description");
        });
        hoverControls[i].addEventListener("mouseout", function (e) {
          overlay.classList.remove("overlay-visible");
          description.classList.remove("description-visible");
          timeout = setTimeout(function () {
            overlay.style.visibility = "hidden";
            description.style.visibilty = "hidden";
          }, 200);
        });
      }
    }

    if (is_touch_device) {
      var projectsContainer = document.querySelector(".projects-container-left-padded");
      projectsContainer.classList.remove("project-container-top-padded");
    }
  },
};
