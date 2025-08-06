document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and navigation elements
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const dropdownToggles = document.querySelectorAll('.dropdown > a');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
    });
    
    // Handle dropdown toggles on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) { // Only for mobile
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
                
                // Close other open dropdowns
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.parentElement.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // Close the menu when a link is clicked
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
                
                // Close any open dropdowns
                dropdownToggles.forEach(toggle => {
                    toggle.parentElement.classList.remove('active');
                });
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !e.target.closest('.main-nav') && 
            !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on window resize if it goes above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset dropdowns
            dropdownToggles.forEach(toggle => {
                toggle.parentElement.classList.remove('active');
            });
        }
    });
});
