// Facts
const facts = [
    "The Brown Bear is the largest predator still living on the continent of Europe and the second largest in North America.",
    "They are the second largest of the three bears.",
    "These bears can live to an age of around 20 to 25 years, the oldest Brown Bear, Lady M, who passed away at the age of 43.",
    "Brown bear mothers give birth in their sleep! Cubs born during hibernation make their way to the mother’s chest and nurse until she is ready to wake up.",
    "The biggest brown bear are the Kodiak bears off the Alaska coast, these giants are the largest subspecies of Brown Bear.",
    "Nearly 50 percent of all Brown Bear cubs die before they are one year old.",
    "They can run faster than the fastest human.",
    "Adult male Brown Bears may kill cubs, a natural (though tragic) behavior that brings the female into estrus (ready to mate) sooner.",
    "The Brown Bear is a single species (Ursus arctos) with many different subspecies, including the grizzly bear and the Kodiak bear.",
    "Despite their bulk, they are surprisingly fast, capable of running in short bursts up to 30-40 mph (48-64 km/h).",
    "Brown Bears have relatively large brains and exhibit high cognitive abilities, including problem-solving.",
    "The name Grizzly comes from the white or silver tips on their brown fur, giving them a grizzled or frosted appearance."
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