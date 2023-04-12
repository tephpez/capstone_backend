const { User } = require('../models/user');

const GetUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};


const CreateUser = async (req, res) => {
  try {
    let userProfile = {
      ...req.body,
    };
    let user = await User.create(userProfile);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true,
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({
      where: { id: userId },
    });
    res.send(`${userId} SUCCESSFULLY DELETED`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
};
