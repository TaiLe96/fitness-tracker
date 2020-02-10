# fitness-tracker

# Summaries
This is an application that allows users to keep track of all the exercises. The users can view how much weight, sets, reps, and duration. It also gives out a pie chart that analyze the weight, sets, reps and duration. The app can also track resistance exercise, and record the distance travelled if it is cardio. All of this information is populated in different charts for easy readability and as a way for users to look at all their workouts as a whole. 

# Techonologies Used
    - HTML: used for structuring and creating elements on the DOM
    - CSS: used to style html elements on the page
    - JavaScript: high level programming language
    - Node.js: JavaScript runtime, allows users to run JavaScript on the server
    - Express: Web framwork for node.js
    - Morgan: Logging middleware for node.js http apps
    - MongoDB: document database
    - Mongoose: mongodb object modeling for node.js

# Code Snippet
```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
```
This is a mongoose schema that allows to create new exercise and break them down by type, name, duration, weight, reps, sets and distance.

# Author
- [LinkedIn](www.linkedin.com/in/tu-tai-le-2a9646139)
- [GitHub](https://github.com/TaiLe96)