module.exports = (sequelize, Model, DataTypes) => {
  class Role extends Model {}
  Role.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      roleName: {
        type: DataTypes.TEXT,
        /* allowNull: false, */
      },
    },
    {
      sequelize,
      modelName: "role",
    },
  );

  return Role;
};
