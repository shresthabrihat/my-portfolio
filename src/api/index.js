const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
