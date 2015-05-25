# SlickNav v1.0.3
## Responsive Mobile Menu jQuery Plugin

###[SlickNav.com](http://slicknav.com)

### Features
* Multi-level menu support
* Flexible, simple markup
* Cross-browser compatibility
* Keyboard Accessible
* Degrades gracefully without JavaScript
* Creates ARIA compliant menu

* * *
### Usage

####Include the CSS & JS
slicknav.css can be modified to fit website design

    <link rel="stylesheet" href="SlickNav/dist/slicknav.min.css" />
    <script src="SlickNav/dist/jquery.slicknav.min.js"></script>

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
            $('#menu').slicknav();
        });
    </script>

### Options
    'label' : 'MENU', // Label for menu button. Use an empty string for no label.
    'duplicate': true, // If true, the mobile menu is a copy of the original.
    'duration': true, // The duration of the sliding animation.
    'easingOpen': 'swing', // Easing used for open animations.
    'easingClose': 'swing' // Easing used for close animations.
    'closedSymbol': '&#9658;', // Character after collapsed parents.
    'openedSymbol': '&#9660;', // Character after expanded parents.
    'prependTo': 'body', // Element, jQuery object, or jQuery selector string to prepend the mobile menu to.
    'parentTag': 'a', // Element type for parent menu items.
    'closeOnClick': false, // Close menu when a link is clicked.
    'allowParentLinks': false // Allow clickable links as parent elements.
    'nestedParentLinks': true // If false, parent links will be separated from the sub-menu toggle.
    'showChildren': false // Show children of parent links by default.
    'removeIds': false // Remove IDs from all menu elements. Defaults to true if duplicate is true.
    'removeClasses': false // Remove classes from all menu elements.
	'brand': '' // Add branding to menu bar.

### Callbacks
    'init': function(){}, // Called after SlickNav creation
    'beforeOpen': function(trigger){}, // Called before menu or sub-menu opened.
    'beforeClose': function(trigger){} // Called before menu or sub-menu closed.
    'afterOpen': function(trigger){} // Called after menu or sub-menu opened.
    'afterClose': function(trigger){} // Called after menu or sub-menu closed.

### Methods
    $('.menu').slicknav('toggle'); // Method to toggle the menu
    $('.menu').slicknav('open'); // Method to open the menu
    $('.menu').slicknav('close'); // Method to close the menu

Without any additional configuration, both the original and mobile menus will be displayed. It is recommended to use media queries to hide the original menu and display the mobile menu when appropriate. Modernizr or similar can be used for graceful degradation.

For example:

    .slicknav_menu {
        display:none;
    }

    @media screen and (max-width: 40em) {
        /* #menu is the original menu */
        .js #menu {
            display:none;
        }

        .js .slicknav_menu {
            display:block;
        }
    }

###Modifying the Theme With Sass
scss/theme.scss can also be modified to fit your website's design. Import the
scss directory into your project and simply use the command line to have Sass watch for the changes made.

    sass --watch scss/slicknav.scss:<directory where you placed SlickNav>/slicknav.css

Now change the colors in theme.scss and the changes will be reflected in slicknav.css.

For example:

    //colors
    $color_0: rgba(255, 255, 255, 0.75);
    $color_btn: deepskyblue;
    $color_text: white;
    $color_bg: dodgerblue;
    $color_shadow: darken($color_bg, 10%);
    $color_hover_bg: $color_btn;
    $color_hover_text: white;



More examples at [SlickNav.com](http://slicknav.com)

### Browser Support
* Chrome
* Firefox
* Safari
* Opera
* IE7+
* Android Browser
* iOS Safari
