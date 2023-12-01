// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', async (req, res) => {
  try {
    // Handle the POST request here
    // You can access the request body using req.body

    // Example response
    const response = {
      message: 'Received POST request',
      data: req.body
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
