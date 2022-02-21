const bcrypt = require("bcryptjs");
module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    //valida la password
    async validPassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
      },
      /* roleId: {
        type: DataTypes.INTEGER,
      }, */
    },
    {
      sequelize,
      modelName: "user",
    },
  );
  //hook que hashea la contraseña al registrarse
  User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, 7);
  });

  return User;
};
