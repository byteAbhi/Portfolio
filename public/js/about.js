// JavaScript to trigger animation when timeline items come into view
document.addEventListener("DOMContentLoaded", function() {
    // Select all timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class if item is in viewport
    function addAnimationClass() {
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add("animate");
            }
        });
    }

    // Initial check on page load
    addAnimationClass();

    // Event listener for scroll to check again
    window.addEventListener("scroll", function() {
        addAnimationClass();
    });
});
