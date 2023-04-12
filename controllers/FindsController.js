const { Find } = require("../models");

const GetAllFinds = async (req, res) => {
    try {
      const finds = await Find.findAll()
      res.send(finds)
    } catch (error) {
      throw error
    }
  }
  
const GetFinds = async (req, res) => {
    try {
      const find = await Find.findByPk(req.params.find_id)
      res.send(find)
    } catch (error) {
      throw error
    }
  }
  

const CreateFind = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let findContent = {
        userId,
        ...req.body
      }
      let find = await Find.create(findContent)
      res.send(find)
    } catch (error) {
      throw error
    }
  }
  
const UpdateFind = async (req, res) => {
    try {
      let findId = parseInt(req.params.find_id)
      let updatedFind = await Find.update(req.body, {
        where : { id: findId},
        returning: true
      })
      res.send(updatedFind)
    } catch (error) {
      throw error
    }
  }
  
const DeleteFind = async (req, res) => {
    try {
      let findId = parseInt(req.params.find_id)
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
    GetFinds,
    CreateFind,
    UpdateFind,
    DeleteFind
}
