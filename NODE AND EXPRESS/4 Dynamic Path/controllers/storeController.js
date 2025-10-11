const Home = require ('../models/Home');

exports.getIndex = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "humara airbnb" });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll(favouriteIds => {
    Home.fetchAll(registeredHomes => {
      const favouriteHomes = registeredHomes.filter(home => favouriteIds.includes(home.id));
      res.render("store/favourites", { homes: favouriteHomes, pageTitle: "Favourites" });
    });
  })

};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, home => {
    if(!home) {
      console.log("Home Not Found");
      return res.redirect("/");
    }
  console.log("Came to Detail Page", homeId, home);

  res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  })

}