
    jQuery('.mobile-nav').on("click", function () {
        jQuery('#menu').toggleClass('active');
    });
    jQuery('#menu').append('<span id="close-nav"></span>');
    jQuery('#close-nav').on("click", function () {
        jQuery('#menu').removeClass('active');
    });

