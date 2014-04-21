$(document).ready( function() {

    if(window.location.pathname.length <= 1) {
        $("#navbar-lincoln-labs").hide(); //hide your div initially

        var $reveal = $("#navbar-lincoln-labs-reveal")

        if($reveal.length > 0) {
            var topOfOthDiv = $reveal.offset().top;

            $(window).scroll(function() {

                if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
                    $("#navbar-lincoln-labs").fadeIn(); //reached the desired point -- show div
                }
            });
        }
    }

    $("#btn-get-updates, #alert-reg-link").on("click", function(e) {
        e.preventDefault();

    	// Navbar CSS Animations
    	$("#navbar").removeClass("animation-navbar-close");
    	$("#navbar").addClass("animation-navbar-open");

    	// Panel Updates CSS Animations
    	$("#panel-updates").removeClass("animation-panel-updates-close");
    	$("#panel-updates").addClass("animation-panel-updates-open");

    	// Body CSS Animations
    	$("body").removeClass("animation-body-close");
    	$("body").addClass("animation-body-open");

    	// Fallback Moving Parts
    	$("#navbar").removeClass("navbar-fixed-top");
        $("#navbar").addClass("navbar-fixed-top-panel-opened");
        $("#panel-updates").removeClass("panel-updates-closed");
        $("#panel-updates").addClass("panel-updates-opened");
        $("body").css("padding-top", "240px");
    });

    $("#btn-close-panel-updates").on("click", function(e) {
        e.preventDefault();

    	// Navbar CSS Animations
    	$("#navbar").removeClass("animation-navbar-open");
    	$("#navbar").addClass("animation-navbar-close");

    	// Panel Updates CSS Animations
    	$("#panel-updates").removeClass("animation-panel-updates-open");
		$("#panel-updates").addClass("animation-panel-updates-close");

		// Body CSS Animations
		$("body").removeClass("animation-body-open");
    	$("body").addClass("animation-body-close");

    	// Fallback Moving Parts
        $("#navbar").removeClass("navbar-fixed-top-panel-opened");
        $("#navbar").addClass("navbar-fixed-top");
        $("#panel-updates").removeClass("panel-updates-opened");
        $("#panel-updates").addClass("panel-updates-closed");
        $("body").css("padding-top", "60px");
    });

    map = new GMaps({
      div: '#map',
      lat: 37.778879,
      lng: -122.397416
    });

    map.addMarker({
      lat: 37.778879,
      lng: -122.397416,
      title: 'Causes.org',
      click: function(e) {
        window.open('https://www.causes.com/')
      }
    });

});
