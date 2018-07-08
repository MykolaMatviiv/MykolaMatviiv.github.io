
jQuery('.mobile-nav').on("click", function () {
	jQuery('#menu').toggleClass('active');
});
jQuery('#menu').append('<span id="close-nav"></span>');
jQuery('#close-nav').on("click", function () {
	jQuery('#menu').removeClass('active');
});


 /*
 $(".add-icon span").click(function() {
    $(this).toggleClass('added');

    });
    */

jQuery('.add-icon span').on("click", function () {
	jQuery(this).toggleClass('added');
});