import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  const fullname = req.query.fullname;
  const re = /^.*[\d_/-].*$/;
  const arr = fullname.split(' ');
  if (fullname === "" || fullname === " " || fullname.match(re) || arr.length > 3 || arr.length === 0){
    res.send("Invalid fullname");
  }
  if (arr.length === 3) {
    res.send(arr[2] +" " + arr[0].charAt(0) +". " + arr[1].charAt(0) + ".");
  } else if (arr.length === 2) {
    res.send(arr[1] +" " + arr[0].charAt(0) + ".");
  } else if (arr.length === 1) {
    res.send(arr[0]);
  }
});

app.get('/task2C', (req, res) => {
  const username = req.query.username;
  let result = username;
  if (username.indexOf('/') >= 0) {
    const pattern = /\/*([\w\d?=-]*)$/gi;
    const match = pattern.exec(username);
    result = match[1];
  }
  if (result.indexOf('?') >=0) {
    result = result.substring(0, result.indexOf('?'));
  }
  if (result.indexOf('/') >=0) {
    result = result.substring(0, result.indexOf('/'));
  }
  if (result.indexOf('@') !== 0) {
    result = '@' + result;
  }
  res.send(result);
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
