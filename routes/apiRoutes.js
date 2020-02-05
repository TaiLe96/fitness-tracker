const db = require("../models")
// const Exercise = require("../models/excercise")
const mongojs = require("mongojs")

module.exports = (app) => {
//     app.get("/api/exercise", ({ body }, res) =>{
//     db.workout.find({})
//     .populate("exercise")
//     .then(dbExercise => {
//         res.json(dbExercise);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     })
// })


// GET
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .populate("exercise")
        .then(dbWorkout=> {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .populate("exercise")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
    })
// POST
app.post("/api/workouts", (req, res) => {
    // Create current date/time
    db.Workout.create({day: Date.now()})
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.json(err)
    })
})

// PUT
app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.create(req.body)
    .then((data) => db.Workout.findOneAndUpdate(
        {_id: req.params.id},
        {
            $push: {
                excercise: data._id
            }
        },
        { new: true })
    )
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})
    
}





// module.exports = app;