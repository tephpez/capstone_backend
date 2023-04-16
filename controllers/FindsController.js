const { Find } = require("../models");

// VIEW ALL FINDS
const GetAllFinds = async (req, res) => {
    try {
      console.log(Find)
      const allFinds = await Find.findAll()
      res.send(allFinds)
    } catch (error) {
      throw error
    }
  }

//  VIEW INDIVIDUAL FIND
const GetFindDetails = async (req, res) => {
    try {
      const find = await Find.findByPk(req.params.findId)
      res.send(find)
    } catch (error) {
      throw error
    }
  }

// // VIEW FINDS BY TYPE
// const GetFindType = async (rew,res_ => {
//   try{

//   }
// })

// CREATE
const CreateFind = async (req, res) => {
    try {
      let userId = parseInt(req.params.userId)
      let findsContent = {
        userId,
        ...req.body
      }
      let find = await Find.create(findsContent)
      res.send(find)
    } catch (error) {
      throw error
    }
  }

// UPDATE
const UpdateFind = async (req, res) => {
    try {
      let findId = parseInt(req.params.findId)
      let updatedFind = await Find.update(req.body, {
        where : { id: findId },
        returning: true
      })
      res.send(updatedFind)
    } catch (error) {
      throw error
    }
  }

// DELETE
const DeleteFind = async (req, res) => {
    try {
      let findId = parseInt(req.params.findId)
      await Find.destroy({
        where: { id: findId }
      })
      res.send(`${findId} SUCCESSFULLY DELETED`)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetAllFinds,
    GetFindDetails,
    CreateFind,
    UpdateFind,
    DeleteFind
}


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    