const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
  // Handle the POST request here
  // You can access the request body using req.body

  // Example response
  const response = {
    message: 'Received POST request',
    data: req.body
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
