exports.geterrorControl = (req, res, next) => {
  res.statusCode = 404;
  res.render('404', {pageTitle: 'Galat Page'});
}