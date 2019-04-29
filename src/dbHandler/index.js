const sqlite = require("sqlite3");


module.exports = function() {
    let exports = {};
    let db = undefined;
    let dogs = undefined;    

    exports.init = function(path) {
        db = new sqlite.Database(path);
        dogs = require("./dogs.js")(db);
        dogs.init();
        exports.dogs = dogs;
    }

    return exports;
}
