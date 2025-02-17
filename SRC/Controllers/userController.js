const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

const getUsers = (req, res) => {
  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading users file');
    } else {
      res.send(JSON.parse(data));
    }
  });
};

const registerUser = (req, res) => {
  const newUser = req.body;
  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading users file');
    } else {
      const users = JSON.parse(data);
      users.push(newUser);
      fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send('Error saving user');
        } else {
          res.status(201).send('User registered');
        }
      });
    }
  });
};

module.exports = { getUsers, registerUser };