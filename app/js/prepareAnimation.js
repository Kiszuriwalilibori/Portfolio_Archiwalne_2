module.exports = {
  prepareAnimation: function prepareAnimation(myclass, jQuery) {
    var $ = jQuery;
    animateDiv(myclass);

    function makeNewPosition() {
      const h = $(window).height() - 50;
      const w = $(window).width() - 50;
      const nh = Math.floor(Math.random() * h);
      const nw = Math.floor(Math.random() * w);
      return [nh, nw];
    }

    function animateDiv(myclass) {
      var newq = makeNewPosition();
      $(myclass).animate(
        {
          top: newq[0],
          left: newq[1],
        },
        1e4,
        function () {
          animateDiv(myclass);
        }
      );
    }
  },
};
