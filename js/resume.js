(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $.ajax({
    url: "https://www.googleapis.com/blogger/v3/blogs/6631528436700468308/posts?key=AIzaSyAhMRY_o7ncGOuaZP1zFvzx0dYJPGNmFXg", 
    success: function(result){
              var blogposts = "";
              var emptyline = "<p></p>";
              var blognumber = "Page: ";
              $.each(result.items , function (index, value){
                if (index == "0")
                  blogposts += "<div id='blogpost" + index + "'>";
                else
                  blogposts += "<div id='blogpost" + index + "' style='display:none'>";
                blogposts += "<div class='subheading'>";
                blogposts +=  value.title ;
                blogposts += "<br/>" + "<u>" +value.published.substring(0,value.published.indexOf('T')) + "</u>";
                blogposts += "</div>";
                blogposts += "<p>&nbsp;</p>";
                blogposts += "<p>";
                blogposts += value.content;
                blogposts += "</p>";
                blogposts += "</div>";
                
                blognumber += "<a id='blognumber" + index + "' href='#awards'>" + (index + 1) + "</a>&nbsp;";
              });

              $("#posts").html(blogposts + emptyline + blognumber);

              $.each(result.items , function (index, value){
                $('#blognumber' + index).click(function(){
                  $("div[id^='blogpost']").hide();
                  $('#blogpost' + index).show();
                });
              });
            }
    });

})(jQuery); // End of use strict
