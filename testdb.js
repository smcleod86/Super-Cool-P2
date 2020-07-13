const db = require('./models');

const errorHandler = error => {
  console.log('🔥🔥🔥🔥🔥🔥');
  console.log(error)
}

// CREATE
// db.user.create({
//   firstName: 'Steve',
//   lastName: 'Peters',
//   age: 44,
//   email: 'stpets@bigdaddybezos.com'
// }).then(userData => {
//   // Now access new user via userData variable
//   console.log(`🌴 Welcome to the jungle`);
//   console.log(userData);
// }).catch(errorHandler);

// console.log('🎢 Adding that user was exhausting');

db.field.create({
    unit: "U-19",
    crop: "potato",
    acreage: "250 acres"
}).then(fieldData => {
  console.log(`🥔🥔🥔🥔🥔`)
  console.log(fieldData)
}).catch(errorHandler)

console.log("🥱🥱🥱🥱🥱adding stuff is exhasting")