// I believe this is old and can be deleted

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model { }

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dog',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);

module.exports = Image;
