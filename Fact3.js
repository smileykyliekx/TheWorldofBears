// Facts
const facts = [
    "In Vietnam, Sun Bears are sometimes called dog bear, likely due to their stocky build and short snout.",
    "Despite their small size, sun bears have proportionally the largest canine teeth of any bear species!",
    "Sun Bears are highly intelligent and can solve complex foraging puzzles.",
    "They are also known as the honey bear (Beruang Madu in Malay and Indonesian) due to their deep love of honey.",
    "Their powerful jaws can even be used to crush coconuts to reach the contents.",
    "Sadly, they now occupy only an estimated 32% to 40% of their historical range.",
    "They will build nests or sleeping platforms high up in trees by bending and breaking branches.",
    "When signaling friendly intent (like to a mate), they make a clucking noise that sounds like a hen.",
    "They are major fig eaters when in season, consuming the fruits whole.",
    "By eating fruit and passing the seeds, they are important seed dispersers in the rainforest.",
    "They have been known to scavenge on the carcasses of animals killed by larger predators like tigers.",
    "They are the second most vegetarian bear species, after the Giant Panda.",
    "Sun bear cubs are highly sought after in the illegal exotic pet trade, which often involves killing the mother to capture the cub."
];


// Function for when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Find the generate button and add a click event
    const generateButton = document.getElementById('generate-fact');
    if (generateButton) {
        generateButton.addEventListener('click', showRandomFact);
    }

});

// Function to show a random fact
function showRandomFact() {

    const factDisplay = document.getElementById('fact-text');


    if (!factDisplay) return;


    const randomNumber = Math.floor(Math.random() * facts.length);


    const selectedFact = facts[randomNumber];


    factDisplay.textContent = selectedFact;
}



// Function to highlight the current page in navigation
function highlightCurrentPage() {
    // Get the current page name
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Find all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Check each link to see if it matches the current page
    navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.style.textDecoration = 'underline';
            link.style.fontWeight = 'bold';
        }
    });
}

// Smooth scrolling for links that start with #
document.addEventListener('click', function(event) {
    // Clicked element link that starts with #
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();

        // Target Elment ID 
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to that element smoothly
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

function addFadeInAnimation() {
    const cards = document.querySelectorAll('.feature-card, .symptom-card, .resource-card, .content-card');

    // Observer to watch when elements come into view
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Make the element fade in
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                // Stop watching this element
                observer.unobserve(entry.target);
            }
        });
    });

    // Start watching all the cards
    cards.forEach(function(card) {
        observer.observe(card);
    });
}

// Fade-in animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    addFadeInAnimation();
});

// Generates facts with the Enter key or Space bar
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const generateButton = document.getElementById('generate-fact');
        if (generateButton && document.activeElement === generateButton) {
            event.preventDefault();
            showRandomFact();
        }
    }
});