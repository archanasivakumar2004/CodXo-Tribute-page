document.addEventListener('DOMContentLoaded', function() {
    const infoBoxes = document.querySelectorAll('.info-box');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScroll() {
        infoBoxes.forEach(box => {
            if (isInViewport(box)) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles
    infoBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    // Handle scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
});