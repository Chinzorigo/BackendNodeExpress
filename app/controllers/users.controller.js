const db = require("../models");
const usersDB = db.userss;
const Op = db.Sequelize.Op;

// Create and Save a new users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a users
  const users = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save users in the database
  usersDB.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the users."
      });
    });
}; 

// Retrieve all userss from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  usersDB.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userss."
      });
    });
};

// Find a single users with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  usersDB.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving users with id=" + id
      });
    });
};

// Update a users by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  usersDB.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "users was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update users with id=${id}. Maybe users was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating users with id=" + id
      });
    });
};

// Delete a users with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  usersDB.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "users was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete users with id=${id}. Maybe users was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete users with id=" + id
      });
    });
};

// Delete all userss from the database.
exports.deleteAll = (req, res) => {
  usersDB.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} userss were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all userss."
      });
    });
};

// find all published users
exports.findAllPublished = (req, res) => {
  usersDB.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userss."
      });
    });
};
