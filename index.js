const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//DDOS Prevention
// Apply the rate limiting middleware to all requests.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
});
app.use(limiter);

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the darkMode.js file
app.get('/public/darkMode.js', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'darkMode.js');
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('darkMode.js file not found');
      res.status(404).send('darkMode.js file not found');
    } else {
      res.sendFile(filePath);
    }
  });
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile('404.html', { root: __dirname });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
