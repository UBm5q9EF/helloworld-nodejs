
const express = require('express');
const app = express();

// Use the PORT environment variable or fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('👋 Hello, World! This is deployed on Render!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
