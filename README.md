# Responsive Mobile Menu jQuery Plugin



### Features
* Supports with multi-level menus
* Flexible, simple markup
* Cross-browser compatibility
* Keyboard Accessible
* Degrades gracefully if javascript disabled
* Creates ARIA compliant menu

* * *
### Usage

####Include the CSS
mobileMenu.css can be modified to fit website design

    <link rel="stylesheet" href="mobileMenu/mobileMenu.css" />

####Menu Markup

    <ul id="menu">
        <li><a href="#">item 1</a></li>
    	<li><a href="#">item 2</a></li>
    	<li><a href="#">item 3</a></li>
    	<li><a href="#">item 4</a></li>
    </ul>
####Initialize

	<script>
		$(function(){
			$('#menu').mobileMenu();
		});
	</script>	

### Options
	'label' : 'MENU', // Label for menu button. Use an empty string for no label.
	'duplicate': true, // If true, the mobile menu is a copy of the original.
	'duration': true, // The duration of the sliding animation.
	'easingOpen': 'swing', // Easing used for open animations.
	'easingClose': 'swing' // Easing used for close animations.
	'prependTo': 'body' // Element, jQuery object, or jQuery selector string to prepend the mobile menu to.
	'parentTag': 'a' // Element type for parent menu items.
	'closeOnClick': false // Close menu when a link is clicked.
    
Without any additional configuration, both the original and mobile menus will be displayed. It is recommended to use media queries to hide the original menu and display the mobile menu when appropriate. Modernizr or similar can be used for graceful degradation.

For example:

    .mm_menu {
        display:none;
    }
    
    @media screen and (max-width: 40em) {
    	/* #menu is the original menu */
    	.js #menu {
    		display:none;
    	}
    	
    	.js .mm_menu {
    		display:block;
    	}
    }
	
### Browser Support
* Chrome
* Firefox
* Safari
* Opera
* IE7+
* Android Browser
* iOS Safari