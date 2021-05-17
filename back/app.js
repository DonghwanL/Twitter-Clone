const express = require('express');
const postRouter = require('./routes/post');
const app = express(); // 한번 호출해 준다.

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/', (req, res) => {
  res.send('Hello API!');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter); // Prefix로 'post'를 붙여준다.

app.listen(3065, () => {
  console.log('서버 실행 중...');
});