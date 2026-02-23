// script.js - Complete JavaScript for Black Theme

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth <= 768) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0a0a0a';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '2px solid #25d366';
            navLinks.style.zIndex = '999';
        }
    }
}

// MD Bot Connect Function
function connectToMDBot() {
    const serverUrl = 'http://nodes.ravage.biz.id:2014/';  // Updated to 2014
    window.open(serverUrl, '_blank');
}

// Popup Functions for Legal Pages
function showPopup(type) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popupTitle');
    const content = document.getElementById('popupBody');
    
    let titleText = '';
    let contentText = '';
    
    switch(type) {
        case 'privacy':
            titleText = 'Privacy Policy';
            contentText = `
                <p><strong style="color:#25d366;">USAMA DHUDDI</strong> operates this website.</p><br>
                <p>We use cookies and ads to provide the best experience. By using this site, you consent to our privacy policy.</p><br>
                <p>For any concerns, contact @UsamaDhuddi on Telegram.</p>
            `;
            break;
        case 'terms':
            titleText = 'Terms of Service';
            contentText = `
                <p>By using this website and services, you agree to:</p><br>
                <p>1. Services are provided "as is"</p>
                <p>2. You are responsible for your WhatsApp account</p>
                <p>3. Don't misuse bots for spam</p>
            `;
            break;
        case 'cookies':
            titleText = 'Cookie Policy';
            contentText = `
                <p>This website uses cookies to enhance your experience and serve personalized ads.</p><br>
                <p>• Ad networks use cookies</p>
                <p>• Analytics cookies track usage</p>
                <p>You can disable cookies in browser settings.</p>
            `;
            break;
    }
    
    title.innerHTML = titleText;
    content.innerHTML = contentText;
    popup.style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Contact Form
function sendMessage(event) {
    event.preventDefault();
    alert('Thank you for your message! USAMA DHUDDI will respond soon.');
}

// Close popup on outside click
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
};

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.width = 'auto';
        navLinks.style.background = 'transparent';
        navLinks.style.padding = '0';
        navLinks.style.borderBottom = 'none';
    } else {
        navLinks.style.display = 'none';
    }
});

// Loading Animation
window.addEventListener('load', function() {
    if (document.getElementById('loading-overlay')) {
        setTimeout(function() {
            document.getElementById('loading-overlay').classList.add('fade-out');
            setTimeout(function() {
                document.getElementById('loading-overlay').style.display = 'none';
            }, 500);
        }, 5000); // 5 seconds loading
    }
});