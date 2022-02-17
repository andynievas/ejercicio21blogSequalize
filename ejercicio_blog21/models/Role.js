

module.exports = (sequelize, Model, DataTypes) => {
    class Role extends Model {}
    Role.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "role",
      },
    );
  
    return Role;
  };