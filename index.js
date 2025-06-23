const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // Render는 환경변수 PORT를 씀

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('달려라장인범123');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
