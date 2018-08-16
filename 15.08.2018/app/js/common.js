/*mobile menu*/
jQuery('.mobile-nav').on("click", function () {
	jQuery('#menu').toggleClass('active');
});
jQuery('#menu').append('<span id="close-nav"></span>');
jQuery('#close-nav').on("click", function () {
	jQuery('#menu').removeClass('active');
});


/*scroll header top*/
$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 60) {
			$('header').addClass('top');
		}
		else{
			$('header').removeClass('top');
		}
	});
});


/*mouse scroll down*/
$(function () {
	$('.mouse-down a[href*=#]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
	});
});

/**/
var swiper = new Swiper('.clients-references-swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 20,
	slidesPerView: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : true,
	},
	navigation: {
		nextEl: '.clients-references-swiper-next',
		prevEl: '.clients-references-swiper-prev',
	},
	breakpoints: {
    // when window width is <= 320px
    900: {
    	slidesPerView: 'auto',
    },
  }
});