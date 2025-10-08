//core module
const path = require('path');

// External Module
const express = require('express');
const bodyParser = require('body-parser');

//local module
const hostRouter = require('./Routers/hostRouter');
const storeRouter = require('./Routers/StoreRouter');
const rootDir = require('./util/pathutil');


const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded());

app.use(storeRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.sendFile(path.join(rootDir, "Views", "404.html"));
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});