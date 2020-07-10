db.user.findOrCreate({
    where: {
      firstName: 'Brian',
      lastName: 'Smith'
    },
    defaults: { age: 88 }
  }).then(function([user, created]) {
    console.log(user); // returns info about the user
  });