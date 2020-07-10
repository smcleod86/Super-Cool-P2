// user model declaration
'use strict';
const bcrypt = require('bcrypt')

// declare user models format
module.exports = function(sequelize, DataTypes) {
    // define user object
    const user = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: 'Invalid email address'
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [1, 99],
                    msg: 'Name must be between 1 and 99 characters'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [8, 99],
                    msg: 'Password is of incorrect length. Double check character number.'
                }
            }
        }
    }, {
        hooks: {
            // before creation
            beforeCreate: function(createdUser, options) {
                if (createdUser && createdUser.password) {
                    let hash = bcrypt.hashSync(createdUser.password, 12)
                    createdUser.password = hash
                }
            }
        }
    });

    user.associate = function(models) {
        // TODO: any user associations you want
        //models.user.hasMany(models.field)
        //models.user.hasMany(model.crop)
    }
    

    // validPassword definition to validate password at user login
    user.prototype.validPassword = function (passwordTyped) {
        return bcrypt.compareSync(passwordTyped, this.password)
    }

    //remove password before any serialization of User object
    user.prototype.toJSON = function() {
        let userData = this.get()
        delete userData.password
        return userData
    }

    return user
}
