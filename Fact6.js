// Facts
const facts = [
    "Asiatic Black Bears are largely nocturnal animals that spend most of the daytime hours sleeping.",
    "Their lifespan in the wild is estimated to be around 25 years, and they can live up to 39 years in captivity.",
    "Thousands of Asiatic Black Bears are kept in captivity in bear bile farms, where bile is painfully extracted for use in traditional medicine.",
    "Some bear experts consider the Asiatic Black Bear to be the least changed of the Old World bear species, suggesting a significant ancestral lineage.",
    "They are one of the largest mammals highly adapted to an arboreal (tree-dwelling) lifestyle, spending up to half their lives in trees.",
    "They are considered the most bipedal of all bear species, capable of walking upright for long distances.",
    "During their deepest winter sleep, their heart rate drops from a normal 40-70 beats per minute down to as low as 8-12 beats per minute.",
    "They use scent marking by rubbing their bodies against trees and through urination/defecation to communicate their territory and status to other bears.",
    "When approaching other bears, they are known to make distinct tut tut sounds, likely by snapping their tongue against the roof of their mouth.",
    "One subspecies, the Baluchistan black bear (U. t. gedrosianus) found in Iran and Pakistan, is listed as Critically Endangered, a status higher than the rest of the species.",
    "Despite being smaller, Asiatic Black Bears are documented to sometimes intimidate the larger Himalayan Brown Bears in direct encounters.",
    "The skulls of newborn Asiatic Black Bear cubs bear a remarkable resemblance to those of adult Sun Bears.",
    "Compared to other bear species, Asiatic Black Bear have a relatively flat face."
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