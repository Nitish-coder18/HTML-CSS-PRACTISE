//core module
const path = require('path');

// External Module
const express = require('express');
const bodyParser = require('body-parser');

//local module
const {hostRouter} = require('./Routers/hostRouter');
const storeRouter = require('./Routers/StoreRouter');
const rootDir = require('./util/pathutil');


const app = express();
app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(storeRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.render('404', {pageTitle: 'Galat Page'});
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});