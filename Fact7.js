// Facts
const facts = [
    "A newborn panda cub is pink, blind, and weighs only about 3 to 5 ounces, making it the smallest placental mammal newborn relative to its mother's size.",
    "A panda's bones are approximately twice as heavy as the bones of other animals of a similar size.",
    "Male pandas will sometimes perform a handstand against a tree while spraying urine to scent-mark. ",
    "Wild pandas have been observed actively rolling in fresh horse manure and rubbing it all over their bodies.",
    "Pandas sometimes drink so much water that they become a bit wobbly, leading to the description of a temporary drunken water behavior ",
    "A rare subspecies, the Qinling Panda (Ailuropoda melanoleuca qinlingensis), is not black-and-white but has a distinctive dark brown and white coat.",
    "Historically, the panda was viewed as a symbol of peace in China. Legend says that warring tribes would raise a flag with a panda image to call a truce or stop a battle.",
    "Though solitary, they form local communities of 7-15 individuals and communicate constantly using an extensive network of communal scent-marking stations.",
    "An actual collective noun for a group of pandas is sometimes called an embarrassment of pandas.",
    "They have the largest masticatory muscles (chewing muscles) of all bears",
    "Pandas have a remarkably slow metabolic rate for their body size, which explains their low activity level.",
    "Panda cubs are known to eat their mother's feces to obtain essential microorganisms that help colonize their gut and aid in the eventual digestion of bamboo.",
    "Cubs remain entirely dependent on their mother's care for the first year and stay with her."
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