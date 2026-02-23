const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname)));

// =============================================
// ROUTES FOR NEW WEBSITE STRUCTURE
// =============================================

// Welcome Page - First page users see
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

// Alternative welcome route
app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

// Intro Page - About Usama
app.get('/intro', (req, res) => {
  res.sendFile(path.join(__dirname, 'intro.html'));
});

// Menu Page - Selection page
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'menu.html'));
});

// Subscribe Page - YouTube subscription
app.get('/subscribe', (req, res) => {
  res.sendFile(path.join(__dirname, 'subscribe.html'));
});

// Confirmation Page - Yes/No after subscription
app.get('/confirm', (req, res) => {
  res.sendFile(path.join(__dirname, 'confirm.html'));
});

// Pricing Page
app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'pricing.html'));
});

// =============================================
// Handle MD Bot Server redirect
// =============================================
app.get('/md-bot', (req, res) => {
  res.redirect('http://nodes.ravage.biz.id:2014/');
});

app.get('/bot', (req, res) => {
  res.redirect('http://nodes.ravage.biz.id:2014/');
});

// =============================================
// Handle YouTube redirect
// =============================================
app.get('/youtube', (req, res) => {
  res.redirect('https://youtube.com/@UsamaDhuddi');
});

// =============================================
// Handle Social Media redirects
// =============================================
app.get('/telegram', (req, res) => {
  res.redirect('https://t.me/UsamaDhuddi');
});

app.get('/whatsapp', (req, res) => {
  res.redirect('https://wa.me/923271636436');
});

app.get('/channel', (req, res) => {
  res.redirect('https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21');
});

// =============================================
// Handle 404 - Page not found
// =============================================
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'welcome.html'));
});

// =============================================
// Start Server
// =============================================
app.listen(PORT, () => {
  console.log('╔════════════════════════════════════════╗');
  console.log('║   🚀 USAMA DHUDDI - WEBSITE ACTIVE    ║');
  console.log('╠════════════════════════════════════════╣');
  console.log(`║  📍 Port: ${PORT}                         ║`);
  console.log(`║  🌐 Local: http://localhost:${PORT}       ║`);
  console.log(`║  🏠 Welcome: http://localhost:${PORT}/    ║`);
  console.log(`║  📝 Intro: http://localhost:${PORT}/intro ║`);
  console.log(`║  📋 Menu: http://localhost:${PORT}/menu   ║`);
  console.log('╚════════════════════════════════════════╝');
});