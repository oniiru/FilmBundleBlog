jQuery(window).ready(function(jQuery) {
	jQuery('.pibfi_pinterest').each(function(index, element) {
		var	$this = jQuery(this),
				$theImage = jQuery($this.find('img:first-child')[0]),
				theImageWidth = $theImage.width(), //Gets the images width
				theImagePosition = $theImage.position(), //Gets the images position (left/right/center)
				$theButton = jQuery($this.find('.xc_pin')[0]);
				$theinstaButton = jQuery($this.find('.xc_insta')[0]);

		
	});	
	
	//Trigger when user hovers over the Pin It button (little FX)
	jQuery('.xc_pin').hover
	(
		function(e){
			jQuery(this).siblings().addClass('pibfi_pinterest_hover');
			jQuery(this).parent().siblings().addClass('pibfi_pinterest_hover');
			jQuery(this).addClass('thisishovered');
			
		},
		function(e){
			jQuery(this).siblings().removeClass('pibfi_pinterest_hover');
			jQuery(this).parent().siblings().removeClass('pibfi_pinterest_hover');
			jQuery(this).removeClass('thisishovered');
			
		}
		
		
	);


	
	
});

// By kortchnoi
function pin_this(e, url) {
	jQuery(window).ready(function(jQuery) {
		window.open(url, 'pinterest', 'screenX=100,screenY=100,height=580,width=730');
		e.preventDefault();
		e.stopPropagation();
	});
//});
}