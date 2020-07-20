const db = require('./models');

const errorHandler = error => {
  console.log('🔥🔥🔥🔥🔥🔥');
  console.log(error)
}

// CREATE
// create fields
// db.field.create({
//   unit: "U-77",
//   crop: "corn",
//   acreage: "295 acres",
//   long: 119,
//   lat: 46
// }).then(fieldData => {
//   console.log(`🥔🥔🥔🥔🥔`)
//   console.log(fieldData)
// }).catch(errorHandler)

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

INSERT INTO fields
(unit, crop, acreage, long, lat)
VALUES
(44, "pototo", "135 acres", -119, 46)

sequelize model:create --name fields --attributes unit:integer,crop:string,acreage:string,long:integer,lat:integer