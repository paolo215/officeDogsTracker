

module.exports = function(db) {
    let exports = {
        init: init,
        getAllDogs: getAllDogs,
        getDog: getDog,
        addDog: addDog,
        updateDog: updateDog,
        deleteDog: deleteDog
    };

    function init() {
        return new Promise(function(resolve, reject) {
            db.run(
                `CREATE TABLE IF NOT EXISTS dogs(
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    name TEXT NOT NULL,
                    owner TEXT NOT NULL,
                    notes TEXT DEFAULT NULL)
                `, function(err) {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(err);
                        }
                    }
            );
            // End db.run
        });
        // End promise
    };

    function getAllDogs() {
        return new Promise(function(resolve, reject) {
            db.all("SELECT * FROM dogs", 
                function(err, rows) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                }
            );
            // End db.all
        });
        // End promise
    };

    function getDog(dogId) {
        return new Promise(function(resolve, reject) {
            db.get("SELECT * FROM dogs WHERE id = :id", {
                    ":id": dogId
                }, function(err, rows) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                }
            );
        });
    };

    function addDog(name, owner, notes) {
        return new Promise(function(resolve, reject) {
            db.run(`INSERT INTO dogs (name, owner, notes)
                VALUES (:name, :owner, :notes)`, {
                    ":name": name,
                    ":owner": owner,
                    ":notes": notes
                }, function(err) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(err);
                    }
                }
            );
        });
    };

    function updateDog(dogId, name, owner, notes) {
        return new Promise(function(resolve, reject) {
            db.run(`UPDATE dogs
                SET 
                name = :name,
                owner = :owner,
                notes = :notes
                WHERE id = :id`, {
                    ":name": name,
                    ":owner": owner,
                    ":notes": notes,
                    ":id": dogId
                }, function(err) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(err);
                    }
                }
            );    
            // End db.run
        });
        // End promise
    };

    function deleteDog(dogId) {
        return new Promise(function(resolve, reject) {
            db.run(`DELETE FROM dogs
                WHERE id = :id`, {
                    ":id": dogId
                }, function(err) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(err);
                    }
                }
            );
            // End db.run
        });
        // End promise
    }; 

    return exports;
}
