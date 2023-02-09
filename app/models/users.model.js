module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return users;
};
