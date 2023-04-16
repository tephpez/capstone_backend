const { Park } = require("../models");

// VIEW ALL PARKS
const GetAllParks = async (req, res) => {
  try { 
    console.log(Park)
    const allParks = await Park.findAll()
    res.send(allParks)
    } catch (error) {
      throw error
    }
  }

  //VIEW INDIVIDUAL PARK
const GetParkDetails = async (req, res) => {
  try {
    const parks = await Park.findByPk(req.params.parkId);
    res.send(park);
  } catch (error) {
    throw error;
  }
};


//CREATE
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
    let parkId = parseInt(req.params.parkId);
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
    let parkId = parseInt(req.params.parkId);
    await Park.destroy({
      where: { id: parkId },
    });
    res.send(`${parkId} SUCCESSFULLY DELETED`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllParks,
  GetParkDetails,
  CreatePark,
  UpdatePark,
  DeletePark,
};

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    