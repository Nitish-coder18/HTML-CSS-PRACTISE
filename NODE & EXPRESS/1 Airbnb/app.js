// External Module
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.get("/", (req, res, next) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>my airbnb</title>
      </head>
      <body>
          <h1>welcome to air bnb</h1>
          <a href="/add-home">Add Home</a>
      </body>
      </html>
    `);
})

app.get("/add-home", (req, res, next) => {
  res.send (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>add home</title>
      </head>
      <body>
          <h1>add Your Home</h1>
          <form action="/add-home" method="POST">
              <input type="text"
              name="houseName"
              placeholder="Name of your house" />
              <input type="submit" value="Add Home">
          </form>
      </body>
      </html>
    `);
})

app.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>home added</title>
    </head>
    <body>
        <h1>home added successfully</h1>
        <a href="/">Go to Home</a>
    </body>
    </html>
    `);
})

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method, req.body);
  next();
});



app.use((req, res, next) => {
  res.statusCode = 404;
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <h1>404 maaf kijiye ap galat page par aa gye hai </h1>
      </body>
      </html>
    `);
  res.end();
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});