
// <<<<<<<---------------------------------------NAVBAR-------------------------------------------------------->>>>>

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const phrases = [
    'Cybersecurity Enthusiast',
    'Ethical Hacker',
    'Web Developer'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
}

typeWriter();



// <<<<<<<---------------------------------------NAVBAR-------------------------------------------------------->>>>>







// <<<<<<<---------------------------------------SKill Detail-------------------------------------------------------->>>>>


// document.querySelectorAll('.skill-item').forEach(item => {
//     item.addEventListener('click', function() {
//         const skill = this.getAttribute('data-skill');
//         const details = document.getElementById(`${skill}-details`);
        
//         // Toggle active class on skill item
//         this.classList.toggle('active');
        
//         // Toggle visibility of skill details
//         if (details.style.display === 'block') {
//             details.style.display = 'none';
//         } else {
//             details.style.display = 'block';
//         }
        
//         // Hide other skill details
//         document.querySelectorAll('.skill-details').forEach(el => {
//             if (el.id !== `${skill}-details`) {
//                 el.style.display = 'none';
//             }
//         });
        
//         // Remove active class from other skill items
//         document.querySelectorAll('.skill-item').forEach(el => {
//             if (el !== this) {
//                 el.classList.remove('active');
//             }
//         });
//     });
// });


// <<<<<<<---------------------------------------SKiLL DETAIL-------------------------------------------------------->>>>>




// <<<<<<<---------------------------------------ACTIVE TAB-------------------------------------------------------->>>>>



const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const contentId = tab.getAttribute('data-tab');
        document.getElementById(contentId).classList.add('active');
    });
});


// <<<<<<<---------------------------------------ACTIVE TAB-------------------------------------------------------->>>>>

// <<<<<<<---------------------------------------TAB CONTETN-------------------------------------------------------->>>>>


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-tab');
    const indicator = document.querySelector('.tab-indicator');
    const arch = document.querySelector('.tab-arch');

    function updateIndicator(tab) {
        const tabRect = tab.getBoundingClientRect();
        const navRect = tab.parentElement.getBoundingClientRect();

        indicator.style.width = `${tabRect.width}px`;
        indicator.style.left = `${tabRect.left - navRect.left}px`;
        
        arch.style.width = `${tabRect.width + 40}px`;
        arch.style.left = `${tabRect.left - navRect.left - 20}px`;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateIndicator(tab);
        });
    });

    // Initialize indicator position
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab) {
        updateIndicator(activeTab);
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.nav-tab.active');
        if (activeTab) {
            updateIndicator(activeTab);
        }
    });
});

// <<<<<<<---------------------------------------TAB CONTETN-------------------------------------------------------->>>>>

// <<<<<<<---------------------------------------  CONTACT FORM-------------------------------------------------------->>>>>





    // Initialize EmailJS with your User ID
emailjs.init('eXZW_cUfs6X9opAaK'); // Replace 'xtz' with your actual EmailJS User ID

// Handle form submission
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = {
        from_name: document.getElementById('name').value, // Matches {{from_name}} in the template
        from_email: document.getElementById('email').value, // Matches {{from_email}} in the template
        message: document.getElementById('message').value, // Matches {{message}} in the template
        to_name: 'Your Name', // Replace with your name if you want to personalize
    };

    // Display loading state
    const submitButton = form.querySelector('.submit-btn');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Send the email using EmailJS
    emailjs
        .send(
            'service_0ji8ryh', // Replace with your EmailJS Service ID
            'template_2u9zmlw', // Replace with your EmailJS Template ID
            formData
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset(); // Reset the form
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again.');
        })
        .finally(() => {
            // Restore button state
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        });
});

// <<<<<<<---------------------------------------  CONTACT FORM-------------------------------------------------------->>>>>
