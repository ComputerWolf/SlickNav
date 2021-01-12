# SlickNav v1.0.10
## Responsive Mobile Menu jQuery Plugin

[![Join the chat at https://gitter.im/ComputerWolf/SlickNav](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ComputerWolf/SlickNav?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/slicknav/badge?style=rounded)](https://www.jsdelivr.com/package/npm/slicknav)

### [Docs & Examples](https://computerwolf.github.io/SlickNav/)

### Features
* Multi-level menu support
* Flexible, simple markup
* Cross-browser compatibility
* Keyboard Accessible
* Degrades gracefully without JavaScript
* Creates ARIA compliant menu

* * *
### Usage

#### Include the CSS & JS
slicknav.css can be modified to fit website design

    <link rel="stylesheet" href="SlickNav/dist/slicknav.min.css" />
    <script src="SlickNav/dist/jquery.slicknav.min.js"></script>
    

If you prefer you can also use the _CSS_ and _JS_ libraries from the **CDN**:
```
<link rel="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></script>
```

#### Menu Markup

    <ul id="menu">
        <li><a href="#">item 1</a></li>
        <li><a href="#">item 2</a></li>
        <li><a href="#">item 3</a></li>
        <li><a href="#">item 4</a></li>
    </ul>
#### Initialize

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
    'appendTo': '', // Element, jQuery object, or jQuery selector string to append the mobile menu to. Takes precedence over prependTo.
    'parentTag': 'a', // Element type for parent menu items.
    'closeOnClick': false, // Close menu when a link is clicked.
    'allowParentLinks': false // Allow clickable links as parent elements.
    'nestedParentLinks': true // If false, parent links will be separated from the sub-menu toggle.
    'showChildren': false // Show children of parent links by default.
    'removeIds': true // Remove IDs from all menu elements. Defaults to false if duplicate set to false.
    'removeClasses': false // Remove classes from all menu elements.
	'brand': '' // Add branding to menu bar.
    'animations': 'jquery' // Animation library. Currently supports "jquery" and "velocity".

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
    
### Animations
SlickNav will use jQuery for animations by default. If you wish to use Velocity.js for animating, be sure to include the library in your code before including SlickNav.

### Menu Display
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

[View more examples](https://computerwolf.github.io/SlickNav/)

### Browser Support
* Chrome
* Firefox
* Safari
* Opera
* IE7+
* Android Browser
* iOS Safari
