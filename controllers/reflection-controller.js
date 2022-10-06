const reflection = require("../models/reflection-model");

class ReflectionController {
  async getAllData(req, res) {
    const result = await reflection.findAll(req.user.id);
    res.status(200).send({
      message: "Success",
      total: result.length,
      data: result,
    });
  }

  async postData(req, res) {
    try {
      const resultOne = await reflection.insertOne(req.body);

      res.status(201).send({
        status: "success",
        result: {
          data: resultOne.rows,
        },
      });
    } catch (err) {
      res.send({
        status: "failed",
        message: err.message,
      });
    }
  }
  //add test-commentar

  async deleteData(req, res) {
    try {
      const result = await reflection.deleteOne(req.params.id);

      res.status(204).send({
        status: "success",
        message: null,
      });
    } catch (err) {
      res.send(err);
    }
  }

  async updateData(req, res) {
    try {
      const result = await reflection.update(req.body);
      res.status(200).send({
        message: "success update data",
        data: result
      });
    } catch (error) {
      res.status(404).send({
        message: "failed update data"
      });
    }
    
  }
}

module.exports = new ReflectionController();
