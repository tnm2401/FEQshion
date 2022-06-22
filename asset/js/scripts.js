// Biến khởi tạo
var timeOut_modalCart;
var viewout = true;
var check_show_modal = true;
// Add a product and show modal cart

/* fixHeightProduct 

function fixHeightProduct(data_parent, data_target, data_image) {

	var box_height = 0;
	var box_image = 0;
	var boxtarget = data_parent + ' ' + data_target;
	var boximg = data_parent + ' ' + data_target + ' ' + data_image;
	jQuery(boximg).css('height', 'auto');
	jQuery($(boxtarget)).css('height', 'auto');
	jQuery($(boxtarget)).removeClass('fixheight');
	jQuery($(boxtarget)).each(function() {
		if (jQuery(this).find($(data_image)).height() > box_image) {
			box_image = jQuery(this).find($(data_image)).height();
		}
	});
	if (box_image > 0) {
		jQuery(boximg).height(box_image);
	}
	jQuery($(boxtarget)).each(function() {
		if (jQuery(this).height() > box_height) {
			box_height = jQuery(this).height();
		}
	});
	jQuery($(boxtarget)).addClass('fixheight');
	if (box_height > 0) {
		jQuery($(boxtarget)).height(box_height);
	}
	$(window).trigger('resize')
	try {
		fixheightcallback();
	} catch (ex) {}
}
*/
jQuery(document).ready(function(){

	if (typeof feed !== 'undefined'){
		feed.run()
	}

	// Get number item for cart header
	// $.get('/cart.js').done(function(cart){
	// 	$('.cart-menu .count').html(cart.item_count);
	// });
	// var lazyLoadInstance = new LazyLoad({
	// 	elements_selector: ".lazy"
	// })
/*
	// Image Product Loaded fix height
	jQuery('.wrapper-collection-1 .content-product-list .image-resize').imagesLoaded(function() {
		fixHeightProduct('.wrapper-collection-1 .content-product-list', '.product-resize', '.image-resize');
		jQuery(window).resize(function() {
			fixHeightProduct('.wrapper-collection-1 .content-product-list', '.product-resize', '.image-resize');
		});
	});
	jQuery('.wrapper-collection-2 .content-product-list .image-resize').imagesLoaded(function() {
		fixHeightProduct('.wrapper-collection-2 .content-product-list', '.product-resize', '.image-resize');
		jQuery(window).resize(function() {
			fixHeightProduct('.wrapper-collection-2 .content-product-list', '.product-resize', '.image-resize');
		});
	});
	jQuery('#collection-body .content-product-list .image-resize').imagesLoaded(function() {
		fixHeightProduct('#collection-body .content-product-list', '.product-resize', '.image-resize');
		jQuery(window).resize(function() {
			fixHeightProduct('#collection-body .content-product-list', '.product-resize', '.image-resize');
		});
	});
	jQuery('.list-productRelated .content-product-list .image-resize').imagesLoaded(function() {
		fixHeightProduct('.list-productRelated .content-product-list', '.product-resize', '.image-resize');
		jQuery(window).resize(function() {
			fixHeightProduct('.list-productRelated .content-product-list', '.product-resize', '.image-resize');
		});
	});
	jQuery('.list-slider-banner .image-resize').imagesLoaded(function() {
		fixHeightProduct('.list-slider-banner', '.product-resize', '.image-resize');
		jQuery(window).resize(function() {
			fixHeightProduct('.list-slider-banner', '.product-resize', '.image-resize');
		});
	});
	jQuery('.search-list-results .image-resize').imagesLoaded(function() {
		fixHeightProduct('.search-list-results', '.product-resize', '.image-resize');
		jQuery(window).resize(function() {
			fixHeightProduct('.search-list-results', '.product-resize', '.image-resize');
		});
	});
*/
});
// Footer 
$(document).ready(function() {
	$('.list-variants-img img').click(function(){
		let src = $(this).attr('src');
		let wrap = $(this).parents('.product-block').find('.product-img picture:eq(0)');
		wrap.find('[media="(max-width: 767px)"]').attr('srcset', src.replace('_thumb.', '_medium.'))
		wrap.find('[media="(min-width: 768px)"]').attr('srcset', src.replace('_thumb.', '_large.'))
		wrap.find('img').attr('srcset', src.replace('_thumb.', '_large.'))
	})
	if (jQuery(window).width() < 768) {
		jQuery('.main-footer .footer-col .footer-title').on('click', function(){
			jQuery(this).toggleClass('active').parent().find('.footer-content').stop().slideToggle('medium');
		});
		// icon Footer
		$('a.btn-fter').click(function(e){
			if ( $(this).attr('aria-expanded') == 'false' ) {
				e.preventDefault();
				$(this).attr('aria-expanded','true');
				$('.main-footer').addClass('bg-active');
			} else {
				$(this).attr('aria-expanded','false');
				$('.main-footer').removeClass('bg-active');
			}
		});
	}
});
// Mainmenu sidebar
$(document).on("click", "span.icon-subnav", function(){
	if ($(this).parent().hasClass('active')) {
		$(this).parent().removeClass('active');
		$(this).siblings('ul').slideUp();
	} else {
		if( $(this).parent().hasClass("level0") || $(this).parent().hasClass("level1")){
			$(this).parent().siblings().find("ul").slideUp();
			$(this).parent().siblings().removeClass("active");
		}
		$(this).parent().addClass('active');
		$(this).siblings('ul').slideDown();
	}
});
//Click event to scroll to top
jQuery(document).on("click", ".back-to-top", function(){
	jQuery(this).removeClass('show');
	jQuery('html, body').animate({
		scrollTop: 0			
	}, 800);
});
/* scroll */
jQuery(window).scroll(function() {
	/* scroll top */
	if ( jQuery('.back-to-top').length > 0 && jQuery(window).scrollTop() > 500 ) {
		jQuery('.back-to-top').addClass('show');
	} else {
		jQuery('.back-to-top').removeClass('show');
	}
	/* scroll header */
	if (jQuery(window).width() < 768) {
		var scroll = $(window).scrollTop();
		if (scroll < 320) {
			$(".main-header").removeClass("scroll-menu");	
		} else {
			$(".main-header").addClass("scroll-menu");		
		}
	} else {
		var height_header =	$('.main-header').height();
		if( jQuery(window).scrollTop() >= height_header ) {			
			jQuery('.main-header').addClass('affix-mobile');
		}	else {
			jQuery('.main-header').removeClass('affix-mobile');
		}
	}
});
$('a[data-spy=scroll]').click(function(){
	event.preventDefault() ;
	$('body').animate({scrollTop: ($($(this).attr('href')).offset().top - 20) + 'px'}, 500);
})
function smoothScroll(a, b){
	$('body,html').animate({
		scrollTop : a
	}, b);
}


// Menu sidebar
$(document).on('click','.tree-menu .tree-menu-lv1',function(){
	$this = $(this).find('.tree-menu-sub');
	$('.tree-menu .has-child .tree-menu-sub').not($this).slideUp('fast');
	$(this).find('.tree-menu-sub').slideToggle('fast');
	$(this).toggleClass('menu-collapsed');
	$(this).toggleClass('menu-uncollapsed');
	var $this1 = $(this);
	$('.tree-menu .has-child').not($this1).removeClass('menu-uncollapsed');
});

// Slide
// function loadContentHome() {
// 	$.ajax({
// 		url: "/pages/chinh-sach-thanh-toan?view=section-home",
// 		async : false,
// 		success: (data) => {
// 			//$('.main-index').append(data);
// 			$(".main-index").append(data)
// 			loaded = false;
// 			new LazyLoad({
// 				elements_selector: ".lazy"
// 			})
// 		},
// 	});
// }
jQuery(document).ready(function(){
	signal = $('footer').offset().top;
	loaded = true;
	if(innerHeight > 2000) {
		loadContentHome()
	} else {
		$(window).scroll(() => {
			let index = $('.load-more').length;
			if (loaded && $(document).scrollTop() > signal - 500) {
				loadContentHome()
			}
		})
	}
	$('#home-slider .owl-carousel').owlCarousel({
		items:1,
		nav: false,
		dots: true,
		autoplay: 5000,
		lazyLoad:true,
		touchDrag: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:1
			}
		}
	});
	$('.list-slider-banner').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});


	$('.my-service').owlCarousel({
	  margin: 10,
	  loop: true,
	  margin:10,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplayHoverPause:true,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 3
		},
		1000: {
		  items: 5
		}
	  }
	})
	$('.comment-customer').owlCarousel({
		margin: 10,
		loop: true,
		margin:10,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  1000: {
			items: 3
		  }
		}
	  })
	  $('.slide-same-project').owlCarousel({
		margin: 10,
		loop: true,
		margin:10,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  1000: {
			items: 3
		  }
		}
	  })
	$('.policy-slide').owlCarousel({
	loop: true,
	margin:10,
	animateOut: 'fadeOut',
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
	responsive: {
		0: {
		items: 1
		},
		600: {
		items: 2
		},
		1000: {
		items: 3
		}
	}
	})
});

// Dropdown Title
jQuery('.title_block').click(function(){
	$(this).next().slideToggle('medium');
});    
$(document).on("click",".dropdown-filter", function(){
	if ( $(this).parent().attr('aria-expanded') == 'false' ) {
		$(this).parent().attr('aria-expanded','true');
	} else {
		$(this).parent().attr('aria-expanded','false');
	}
});

/* Search ultimate destop -mobile*/
$('.ultimate-search').submit(function(e) {
	e.preventDefault();
	var q = $(this).find('input[name=q]').val();
	var q_follow = 'product';
	var query = encodeURIComponent('(title:product**' + q + ')');
	if( !q ) {
		window.location = '/search?type='+ q_follow +'&q=*';
		return;
	}	else {
		window.location = '/search?type=' + q_follow +'&q=filter=' + query;
		return;
	}
});
/******************/
var $input = $('.ultimate-search input[type="text"]');
$input.bind('keyup change paste propertychange', function() {
	var key = $(this).val(),
			$parent = $(this).parents('.wpo-wrapper-search'),
			$results = $(this).parents('.wpo-wrapper-search').find('.smart-search-wrapper');
	if(key.length > 0 ){
		$(this).attr('data-history', key);
		var q_follow = 'product',
				str = '';
		str = '/search?q=filter=(title:product**' + key + ')&view=ultimate-product';
		$.ajax({
			url: str,
			type: 'GET',
			async: true,
			success: function(data){
				$results.find('.resultsContent').html(data);
			}
		})
		$results.fadeIn();
	}else{
		$results.fadeOut();
	}
})

$('input[name="follow"]').on('change', function(){
	$('.ultimate-search input[type="text"]').trigger('change');
})
$('input[name="follow_mobile"]').on('change', function(){
	$('.ultimate-search input[type="text"]').trigger('change');
})
$('body').click(function(evt) {
	var target = evt.target;
	if (target.id !== 'ajaxSearchResults' && target.id !== 'inputSearchAuto') {
		$(".ajaxSearchResults").hide();
	}
	if (target.id !== 'ajaxSearchResults-mb' && target.id !== 'inputSearchAuto-mb') {
		$(".ajaxSearchResults").hide();
	}
});
$('body').on('click', '.ultimate-search input[type="text"]', function() {
	if ($(this).is(":focus")) {
		if ($(this).val() != '') {
			$(".ajaxSearchResults").show();
		}
	} else {

	}
})


$('.image_project .nav-link').click(function() {
	var target = $(this);
	$('.nav-link').not(target).removeClass('active');
	$(this).addClass('active');
});

var sync1 = $("#main-img");
var sync2 = $("#thumbnails");
var flag = false;
var slides = sync1.owlCarousel({
	margin: 10,
	items: 1,
	nav:false
	}).on('change.owl.carousel', function(e) {
	if (e.namespace , e.property.name === 'position' , !flag) {
	flag = true; thumbs.to(e.relatedTarget.relative(e.property.value), 300, true);
	flag = false;
	}
	}).data('owl.carousel');
	var thumbs = sync2.owlCarousel({
	responsive : {
		// breakpoint from 0 up
		0 : {
			items:0
		},
		// breakpoint from 480 up
		480 : {
			items:5
		},
		// breakpoint from 768 up
		768 : {
			items:6
		}
	},
	dots:true,
	nav:false,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]

	}).on('click', '.item', function(e) {
	e.preventDefault(); sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
	}).on('change.owl.carousel', function(e) {
	if (e.namespace , e.property.name === 'position' , !flag) {
	//nsole.log('...');
	}
	}).data('owl.carousel');
	
	///////////////
	var sync1 = $("#main-img-2");
	var sync2 = $("#thumbnails-2");
	var flag = false;
	var slides = sync1.owlCarousel({
		margin: 10,
		items: 1,
		nav:false
		}).on('change.owl.carousel', function(e) {
		if (e.namespace , e.property.name === 'position' , !flag) {
		flag = true; thumbs.to(e.relatedTarget.relative(e.property.value), 300, true);
		flag = false;
		}
		}).data('owl.carousel');
		var thumbs = sync2.owlCarousel({
		responsive : {
			// breakpoint from 0 up
			0 : {
				items:0
			},
			// breakpoint from 480 up
			480 : {
				items:5
			},
			// breakpoint from 768 up
			768 : {
				items:6
			}
		},
		dots:true,
		nav:false,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	
		}).on('click', '.item', function(e) {
		e.preventDefault(); sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
		}).on('change.owl.carousel', function(e) {
		if (e.namespace , e.property.name === 'position' , !flag) {
		//nsole.log('...');
		}
		}).data('owl.carousel');
		