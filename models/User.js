const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//Creates a User model
class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init(
  {
    //Defines an id column
    id: {
      //Uses Sequelize DataTypes object to define what type of data it is
      type: DataTypes.INTEGER,
      //Does not allow Null values
      allowNull: false,
      //Defines that this is the Primary Key
      primaryKey: true,
      //Turns on auto increment
      autoIncrement: true,
    },
    //Defines a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Defines an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //Ensures there is not a duplicate value in the table
      unique: true,
      //Ensures result entered is in email format
      validate: {
        isEmail: true,
      },
    },
    //Defines a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //Requires the password to be this length
        len: [4],
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    //Pass in the sequelize connection
    sequelize,
    //Doesn't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    //Doesn't pluralize name of database table
    freezeTableName: true,
    //Uses underscores instead of camel-casing
    underscored: true,
    //Model name in the database
    modelName: "user",
  }
);

module.exports = User;
