const User = require('./User');
const Dog = require('./Dog');
// const Image = require('./Image');

User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Dog.belongsTo(User, {
  foreignKey: 'user_id'
});

// Image.belongsTo(Dog, {
//   foreignKey: 'dog_Id'

// });

module.exports = { User, Dog };
