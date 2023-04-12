const { Park } = require("../models/park");

const GetPark = async (req, res) => {
  try {
    const parks = await Park.findAll();
    res.send(parks);
  } catch (error) {
    throw error;
  }
};

const CreatePark = async (req, res) => {
  try {
    let parkProfile = {
      ...req.body,
    };
    let park = await Park.create(parkProfile);
    res.send(park);
  } catch (error) {
    throw error;
  }
};

const UpdatePark = async (req, res) => {
  try {
    let parkId = parseInt(req.params.park_id);
    let updatedPark = await Park.update(req.body, {
      where: { id: parkId },
      returning: true,
    });
    res.send(updatedPark);
  } catch (error) {
    throw error;
  }
};

const DeletePark = async (req, res) => {
  try {
    let parkId = parseInt(req.params.park_id);
    await Park.destroy({
      where: { id: parkId },
    });
    res.send(`${parkId} SUCCESSFULLY DELETED`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetPark,
  CreatePark,
  UpdatePark,
  DeletePark,
};

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    