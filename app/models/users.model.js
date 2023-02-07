module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    Id: {
      type: Sequelize.STRING
    },
    FirstName: {
      type: Sequelize.STRING
    }
  });

  return users;
};
