var { sideKick } = require("./sideKick");

module.exports = {
  prepareSideShiftingOnVisible: function () {
    window.location.hash = "Home";
    sideKick("left", "fancy-l");
    sideKick("right", "fancy-r");
  },
};
