const Task = require("../model/task");
const { get } = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

route.get("/", async (req, res) => {
  try {
    const task = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ id: req.params.id }, req.body);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, re) => {
  try {
    const task = await Task.findByIdAndDelte(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
