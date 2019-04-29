
const router = require("express").Router();

module.exports = function(db) {
    let exports = {};
    router.get("/dogs", function(req, res) {
        db.dogs.getAllDogs()
            .then(function(result) {
                res.status(200);
                res.json(result);
                res.end();
            }).catch(function(err) {
                if(err) {
                    res.status(500);
                    console.log(err);
                    res.end();
                }
            });
    });

    router.post("/dogs", function(req, res) {
        db.dogs.addDog(req.query.name, req.query.owner, req.query.notes)
            .then(function(result) {
                res.status(200);
                res.end();
            })
            .catch(function(err) {
                if(err) {
                    res.status(500);
                    console.log(err);
                    res.end();
                }
            });
        res.end();
    });

    router.get("/dogs/:id", function(req, res) {
        let dogId = req.params.id;
        db.dogs.getDog(dogId)
            .then(function(result) {
                res.status(200);
                res.json(result);
                res.end();
            }).catch(function(err) {
                if(err) {
                    res.status(500);
                    console.log(err);
                    res.end();
                }
            });
    });

    router.put("/dogs/:id", function(req, res) {
        let dogId = req.params.id;
        db.dogs.updateDog(dogId, req.query.name, req.query.owner, req.query.notes)
            .then(function(result) {
                res.status(200);
                res.end();
            }).catch(function(err) {
                if(err) {
                    res.status(500);
                    console.log(err);
                    res.end();
                }
            });
        res.end();
    });

    router.delete("/dogs/:id", function(req, res) {
        let dogId = req.params.id;
        db.dogs.deleteDog(dogId)
            .then(function(result) {
                res.status(200);
                res.end();
            }).catch(function(err) {
                if(err) {
                    res.status(500);
                    console.log(err);
                    res.end();
                }
            });
        res.end();
    });

    exports.router = router;
    return exports;
}
