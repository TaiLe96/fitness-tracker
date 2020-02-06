// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const ExerciseSchema = new Schema({
//     type: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number,
//     distance: Number
// })

// const Exercise = mongoose.model("Exercise", ExerciseSchema);
// // module.exports = Exercise;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }

});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;