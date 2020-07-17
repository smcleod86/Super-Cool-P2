const db = require('./models');

const errorHandler = error => {
  console.log('🔥🔥🔥🔥🔥🔥');
  console.log(error)
}

// CREATE
// create crops
db.field.create({
  unit: "U-77",
  crop: "corn",
  acreage: "295 acres",
  long: 45,
  lat: 45
}).then(fieldData => {
  console.log(`🥔🥔🥔🥔🥔`)
  console.log(fieldData)
}).catch(errorHandler)

// console.log("🥱🥱🥱🥱🥱adding stuff is exhasting")


// db.comment.create({
//   userId: 5,
//   fieldId: 6,
//   comment: "Finished putting on a new sprinkler package."
// }).then(commentData => {
//   console.log(`🥔🥔🥔🥔🥔`)
//   console.log(commentData)
// }).catch(errorHandler)

// console.log("🥱🥱🥱🥱🥱adding stuff is exhasting")