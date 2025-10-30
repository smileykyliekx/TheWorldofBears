// Facts
const facts = [
    "Their feeding is extremely noisy. The powerful, vacuum-like sucking and snorting sounds they make while raiding termite mounds can be heard from up to 100 meters away.",
    "Sloth Bears have the longest tail of all living bear species, measuring 15-18 cm",
    "They are the only bear species that routinely carries its young on its back.",
    "The beloved character Baloo from Rudyard Kipling's The Jungle Book is a Sloth Bear.",
    "Sloth Bear mothers have been observed successfully fending off full-grown tigers to protect their cubs. ",
    "Historically, Sloth Bear cubs were captured and forced into the cruel, abusive trade of dancing bears, a practice that has been significantly curtailed by conservation efforts in India.",
    "Outside of mating and mothers with cubs, temporary groups of up to five to seven bears have occasionally been observed, communicating with strange facial expressions.",
    "Their paws are often slightly turned inward, an adaptation that is thought to further enhance their efficiency for digging.",
    "They possess the longest, most curved, and most sickle-shaped claws of any bear species.",
    "Adult Sloth Bears are unique among all bear species because they lack the two upper middle incisor teeth.",
    "Besides tigers and leopards, dhole (Asian wild dog) packs are known to predate Sloth Bears.",
    "While they live about 16 years in the wild, Sloth Bears have a remarkable maximum lifespan in captivity, with some individuals living for over 40 years.",
    "They are classified as a myrmecophagous mammal, meaning their diet is primarily focused on ants and termites."
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