// script.js - Common functions for all pages

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
            navLinks.style.background = 'rgba(10,10,20,0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '2px solid #25d366';
            navLinks.style.zIndex = '999';
        }
    }
}

// ===========================================
// MD BOT CONNECT FUNCTION - LINK IS HIDDEN
// ===========================================
function connectToMDBot() {
    // The actual server link is hidden here
    const serverUrl = 'http://nodes.ravage.biz.id:2014/';
    
    // Open in new tab
    window.open(serverUrl, '_blank');
    
    // Optional: Show notification
    alert('🟢 Connecting to MD Bot Server...');
}

// Popup Functions
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
                <p>We use Google AdSense which uses cookies to serve personalized ads. By using this site, you consent to our privacy policy.</p><br>
                <p>We collect basic information like IP address, browser type, and pages visited to improve our services.</p><br>
                <p>For any privacy concerns, contact @UsamaDhuddi on Telegram.</p>
            `;
            break;
            
        case 'terms':
            titleText = 'Terms of Service';
            contentText = `
                <p>By using this website and services, you agree to the following terms:</p><br>
                <p>1. Services are provided "as is" without warranties.</p>
                <p>2. You are responsible for your WhatsApp account and compliance with WhatsApp's terms.</p>
                <p>3. Don't misuse bots for spam or illegal activities.</p>
                <p>4. We reserve the right to modify or discontinue services at any time.</p>
                <p>5. Prices and plans are subject to change with notice.</p>
            `;
            break;
            
        case 'cookies':
            titleText = 'Cookie Policy';
            contentText = `
                <p>This website uses cookies to enhance your browsing experience and serve personalized advertisements.</p><br>
                <p><strong>What are cookies?</strong> Small text files stored on your device.</p><br>
                <p><strong>How we use cookies:</strong></p>
                <p>• Google AdSense uses cookies for ad personalization</p>
                <p>• Analytics cookies to understand traffic</p>
                <p>• Functional cookies for website performance</p><br>
                <p>You can disable cookies in your browser settings.</p>
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

// AdSense Initialization
window.addEventListener('load', function() {
    var ads = document.querySelectorAll('.adsbygoogle');
    for (var i = 0; i < ads.length; i++) {
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log('Ad initialized');
        }
    }
});

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