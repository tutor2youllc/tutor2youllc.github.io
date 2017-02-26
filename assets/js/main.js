
$(document).ready(function(){
  $(window).stuck();

  $('#swappable-title').sloganRoulette({
    autoplay: true,
    repeat: true,
    startDelay: 2000,
    interval: 3500,
    outClass: "fadeOut",
    inClass: "slideInLeft",
    slogans: ["See what we can do to provide a solution for you.", "We know the challenges faced by today’s students."]
  });

  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$('#mainNav').affix({
  offset: {
    top: 100
  }
})

});
