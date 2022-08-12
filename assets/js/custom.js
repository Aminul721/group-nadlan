(function($){
	$(".pop-link").click(function() { 
		$('.popup_content1').fadeToggle('fast'); 
	});
	$(".close_pop").click(function() { 
		$('.popup_content1').fadeOut('fast'); 
	});	
})(jQuery);


jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});

(function(jQuery){
	jQuery(window).on('load', function() {
		(function($) {
			handlePreloader()
		})(jQuery);
	});

	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('body').removeClass('active-preloader-ovh');
			jQuery('.preloader').fadeOut();
		}
	}
	
	var topmenu = jQuery( '.top_menu' ).html();
	jQuery( '.mobile_top_menu' ).html( topmenu );


	jQuery( ".toggle_view_item h4" ).click(function(e) {
		if(jQuery(this).hasClass('active')) {
		} else {
			$( ".toggle_view_item h4" ).each(function() {
				if(jQuery(this).hasClass('active')) {
					jQuery(this).toggleClass('active');
					jQuery(this).next('.toggle_view_item .show_details').slideToggle('hide');
				}
			});
		}
		jQuery(this).toggleClass('active');
		jQuery(this).next('.toggle_view_item .show_details').slideToggle('slow');
		e.preventDefault();
	});

	jQuery( ".toggle_view_item" ).click(function(e) {
		if(jQuery(this).hasClass('active')) {
		} else {
			$( ".toggle_view_item" ).each(function() {
				if(jQuery(this).hasClass('active')) {
					jQuery(this).toggleClass('active');
				}
			});
		}
		jQuery(this).toggleClass('active');
	});

})(jQuery);


jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});

jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});


jQuery(function(){
	var $grid = jQuery('.projects_box').isotope({
	  	// layoutMode: 'fitRows',
		itemSelector: '.projects_item',
		percentPosition: true,
		originLeft: false,
		masonry: { 
			columnWidth:1,
		}
	}); 

	jQuery('.title-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
});

$(document).ready(function() {
  jQuery('.apartment_plans_carousel').owlCarousel({
		loop:true,
		nav:true,
		margin:0,
		items:4,
	    rtl:true,
		dots:false,
		responsiveClass:true,
		responsive:{
	        0:{
	            items:1,
				dots:true,
				nav:true,
				loop: true
	        },
			768:{
	            items:2,
	            dots:true,
				nav:true,
				loop: true
	        },
			1023:{
	            items:3,
	            dots:true,
				nav:true,
				loop: true
	        },
	        1024:{
	            items:4,
	        }
	    }
	});
});
	// jQuery('.apartment_plans_carousel').owlCarousel({
	// 	loop:true,
	// 	nav:true,
	// 	margin:0,
	// 	items:4,
	//     rtl:true,
	// 	dots:false,
	// 	responsiveClass:true,
	// 	responsive:{
	//         0:{
	//             items:1,
	// 			dots:true,
	// 			nav:true,
	// 			loop: true
	//         },
	// 		768:{
	//             items:2,
	//             dots:true,
	// 			nav:true,
	// 			loop: true
	//         },
	// 		1023:{
	//             items:3,
	//             dots:true,
	// 			nav:true,
	// 			loop: true
	//         },
	//         1024:{
	//             items:4,
	//         }
	//     }
	// });