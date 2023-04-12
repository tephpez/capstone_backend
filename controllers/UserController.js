const { User } = require('../models');

const GetUser = async (req, res) => {
  try{
    console.log(User)
    const selectUser = await User.findByPk(req.params.userId)
    res.send(selectUser)
  } catch (error) {
    throw error
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
    let userId = parseInt(req.params.userId);
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
    let userId = parseInt(req.params.userId);
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


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    