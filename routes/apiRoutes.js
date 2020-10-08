const router = require("express").Router();
const Workout = require("../models/workout.js");


//get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(data => {
            console.log(res)
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
});


router.post("/api/workouts", (req, res) => {

    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {

            res.status(400).json(err)
        });

});

router.put("/api/workouts/:id", ({ body, params }, res) => {

    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true }
    ).then(data => res.json(data)
    ).catch(err => {
        console.log("An error has occured")
        res.json(err);
    });
});

router.post("/api/workouts/range", (req, res) => {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log("An error has occured")
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
        .then(data => res.json(data))
        .catch(err => {
            console.log("An error has occured")
            res.json(err);
        });
});

module.exports = router;