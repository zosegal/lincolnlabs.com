$(function() {

    $("#btn-get-updates").on("click", function() {
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

    $("#btn-close-panel-updates").on("click", function() {
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

});
