// Define environment variables
const env = {
    PLAID_CLIENT_ID: 'your-plaid-client-id', // Add this line
    PLAID_SECRET: 'your-plaid-secret', // Add this line
    USPS_API_KEY: 'your-usps-api-key'
};

(function ($) {
    "use strict";

    $(document).ready(function($){
        // ... existing code ...
    });

    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });

}(jQuery));

(function ($) {
    "use strict";

    $(document).ready(function($){
        
        // Testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive:{
                0:{ items:1, nav:false },
                600:{ items:1, nav:false },
                1000:{ items:1, nav:false, loop:true }
            }
        });

        // Homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{ items:1, nav:false, loop:true },
                600:{ items:1, nav:true, loop:true },
                1000:{ items:1, nav:true, loop:true }
            }
        });

        // Logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive:{
                0:{ items:1, nav:false },
                600:{ items:3, nav:false },
                1000:{ items:4, nav:false, loop:true }
            }
        });

        // Count down
        if($('.time-countdown').length){  
            $('.time-countdown').each(function() {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function(event) {
                    $this.html(event.strftime(''
                        + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> '
                        + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  '
                        + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  '
                        + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
                });
            });
        }

        // Projects filters isotope
        $(".product-filters li").on('click', function () {
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".product-lists").isotope({ filter: selector });
        });
        
        // Isotope inner
        $(".product-lists").isotope();

        // Magnific popup
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Lightbox
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: { verticalFit: true }
        });

        // Homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        // Sticky js
        $("#sticker").sticky({ topSpacing: 0 });

        // Mean menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
        // Search form
        $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });
    
    });

    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });

}(jQuery));

// Product Image Carousel
let currentImageIndex = 0;
let images = [];

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

    if (images[currentImageIndex]) {
        document.getElementById("product-image").src = images[currentImageIndex];
    } else {
        console.error("No image found at index: " + currentImageIndex);
    }
}

function setImagesForPage() {
    const pagePath = decodeURIComponent(window.location.pathname);

    if (pagePath.includes('Jalapeño.html')) {
        images = ["assets/img/products/Jalapeno.jpg", "assets/img/products/Jalapeno1.jpg"];
    } else if (pagePath.includes('sweet_heat.html')) {
        images = ["assets/img/products/Sweet_Heat1.jpg", "assets/img/products/Sweet_Heat.jpg"];
    } else if (pagePath.includes('doe\'s_best.html')) {
        images = ["assets/img/products/Doe's_Best1.jpg", "assets/img/products/Doe's_best.jpg"];
    } else if (pagePath.includes('single-product.html')) {
        images = ["assets/img/products/Brazillian_BBQ.jpg", "assets/img/products/Brizillianbbq.jpg"];
    } else if (pagePath.includes('asian_zing.html')) {
        images = ["assets/img/products/Asian Zing.JPG", "assets/img/products/asianzing.JPG"];
    } else if (pagePath.includes('garlic_soy.html')) {
        images = ["assets/img/products/Garlic Soy.JPG", "assets/img/products/garlicsoy.JPG"];
    } else if (pagePath.includes('cracked_pepper.html')) {
        images = ["assets/img/products/Cracked Pepper.jpg", "assets/img/products/crackedpepper.JPG"];
    } else {
        console.error("No matching page found for setting images.");
    }

    if (images.length > 0) {
        document.getElementById("product-image").src = images[0];
    } else {
        console.error("Images array is empty for page: " + pagePath);
    }

    console.log("Images set for page:", images);
}

// Call the function to set images when the script loads
setImagesForPage();

// Cart management
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const productName = this.closest('.single-product-item').querySelector('h3').innerText;
        const price = parseFloat(this.closest('.single-product-item').querySelector('.product-price').innerText.replace(/[^\d.-]/g, ''));
        addToCart(productName, price);
    });
});

// Remove item from cart
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const productName = this.dataset.product;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.name !== productName);
        localStorage.setItem('cart', JSON.stringify(cart));

        this.closest('tr').remove();
    });
});

// Update the cart total
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    if (subtotalElement && shippingElement && totalElement) {
        let cartItems = [];

        function calculateSubtotal() {
            let subtotal = 0;
            cartItems.forEach(item => subtotal += item.price * item.quantity);
            return subtotal;
        }

        function calculateTotal() {
            const subtotal = calculateSubtotal();
            const shipping = 45;
            const total = subtotal + shipping;

            subtotalElement.innerText = `$${subtotal.toFixed(2)}`;
            shippingElement.innerText = `$${shipping.toFixed(2)}`;
            totalElement.innerText = `$${total.toFixed(2)}`;
        }

        function loadCartItems() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems = cart;
            calculateTotal();
        }

        loadCartItems();
    } else {
        console.error("One or more elements could not be found in the DOM.");
    }
});

// Price per Oz
document.addEventListener("DOMContentLoaded", function() {
    const basePricePerOz = 2; // Price per ounce
    const sizeDropdown = document.getElementById('product-size');
    const totalPriceElement = document.getElementById('total-price');

    // Function to update the total price based on the selected size
    function updateTotalPrice() {
        const selectedSize = parseInt(sizeDropdown.value);
        const totalPrice = basePricePerOz * selectedSize;
        totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }

    // Initial calculation when the page loads
    updateTotalPrice();

    // Update price when the user selects a different size
    sizeDropdown.addEventListener('change', updateTotalPrice);

    // Event listener for "Add to Cart" button
    document.querySelector('.cart-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const selectedSize = parseInt(sizeDropdown.value);
        const productName = document.querySelector('h3').innerText;
        const price = basePricePerOz * selectedSize;
        addToCart(productName, price, selectedSize);
    });

    // Function to add item to cart
    function addToCart(productName, price, size) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if the item already exists in the cart
        let existingItem = cart.find(item => item.name === productName && item.size === size);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            // If not, add the new item to the cart
            cart.push({ name: productName, price: price, size: size, quantity: 1 });
        }
        
        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} (${size} oz) has been added to your cart!`);
    }
});

// Plaid Checkout page
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed"); // Debugging statement

    fetch('http://localhost:3000/create_link_token', { // Update the URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: 'unique-user-id' }) // Replace with actual user ID
    })
    .then(response => response.json())
    .then(data => {
        console.log('Link token fetched:', data.link_token); // Debugging statement
        var plaidHandler = Plaid.create({
            token: data.link_token, // Use the link token
            onSuccess: function(public_token, metadata) {
                // Send the public_token and account metadata to your server
                fetch('http://localhost:3000/plaid/exchange_public_token', { // Update the URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        public_token: public_token,
                        account_id: metadata.account_id
                    })
                }).then(response => response.json())
                .then(data => {
                    console.log('Plaid token exchanged successfully:', data);
                    alert('Bank account connected successfully!');
                    // Proceed to complete the order
                    completeOrder();
                }).catch(error => {
                    console.error('Error exchanging Plaid token:', error);
                });
            },
            onExit: function(err, metadata) {
                if (err != null) {
                    // The user encountered a Plaid Link error, or closed Plaid Link
                    console.error('Plaid Link error:', err);
                } else {
                    console.log('Plaid Link exited without error.');
                }
            }
        });

        // Open Plaid Link when the user clicks the connect button
        var linkButton = document.getElementById('link-button');
        if (linkButton) {
            console.log('Link button found'); // Debugging statement
            linkButton.addEventListener('click', function(event) {
                event.preventDefault();
                console.log('Link button clicked'); // Debugging statement
                plaidHandler.open();
            });
        } else {
            console.error('Link button not found'); // Debugging statement
        }
    })
    .catch(error => {
        console.error('Error fetching link token:', error);
    });

    // Simulated order completion function
    function completeOrder() {
        alert('Order placed successfully!');
        // Here you would send the order data to your server for processing
    }

    // Place Order Button
    document.getElementById('place-order-button').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Please connect your bank account to proceed.');
    });
});

// USPS SHIPPING 
document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate shipping cost
    function calculateShipping() {
        // Example API call to USPS (replace with actual API call)
        fetch('https://api.usps.com/shipping/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add your USPS API key here
                'Authorization': `Bearer ${env.USPS_API_KEY}` // Use the environment variable
            },
            body: JSON.stringify({
                // Add necessary parameters for USPS API
                originZip: '12345',
                destinationZip: '67890',
                weight: 2 // weight in pounds
            })
        })
        .then(response => response.json())
        .then(data => {
            // Update the shipping cost in the HTML
            document.getElementById('shipping-cost').textContent = data.shippingCost;
            // Optionally, update the total cost
            const subtotal = parseFloat(document.getElementById('subtotal').textContent.replace('$', ''));
            const total = subtotal + parseFloat(data.shippingCost);
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        })
        .catch(error => console.error('Error calculating shipping:', error));
    }

    // Call the function to calculate shipping on page load
    calculateShipping();
});