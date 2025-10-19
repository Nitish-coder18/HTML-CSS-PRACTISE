const fs = require('fs');
const path = require('path');
const rootDir = require('../util/pathutil');
const { json } = require('body-parser');

const homefilePath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(callback) {
        this.id = Math.random().toString();
        Home.fetchAll(registeredHomes => {
            registeredHomes.push(this);
             
        fs.writeFile(homefilePath, JSON.stringify(registeredHomes), callback);
    });
}

 static fetchAll(callback) {
    fs.readFile(homefilePath, (err, data) => {
        if (err) {
            callback ([]);
        } else {
            callback (JSON.parse(data));
        }
        })
    }


static findById(homeId, callback) {
    Home.fetchAll(homes => {
        const home = homes.find(home => home.id === homeId);
        callback(home);
    })
}
}