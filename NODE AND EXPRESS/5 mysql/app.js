//core module
const path = require('path');

// External Module
const express = require('express');
const bodyParser = require('body-parser');

//local module
const {hostRouter} = require('./Routers/hostRouter');
const storeRouter = require('./Routers/StoreRouter');
const rootDir = require('./util/pathutil');
const errorControl = require('./controllers/errorController');

const airbnbDb = require("./util/database-utill");
const { data } = require('autoprefixer');

airbnbDb.execute("SELECT * FROM homes").then(([rows, fields]) => {
  console.log(rows);
})


const app = express();
app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorControl.geterrorControl);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});