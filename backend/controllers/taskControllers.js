const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const taskModel = require("../models/taskModel");
const { json } = require("body-parser");

async function createNewTask(req, res) {
  const newTask = await taskModel.create({
    name: req.body.name,
    checked: req.body.checked,
  });
  //res.redirect("/tasks");
  res.json(newTask);
}

async function getTasks(req, res) {
  const tasks = await taskModel.find({});
  //res.send(tasks)
  res.json(tasks);
}

async function deleteTask(req, res) {
  try {
    const tasksToDelete = Object.keys(req.body).length; //req.body.ids;
    if (tasksToDelete.length > 1) {
      for (task of tasksToDelete) {
        await taskModel.deleteOne({ _id: task });
      }
    } else {
      await taskModel.deleteOne({ _id: req.body._id });
    }

    res.json({
      message: "Task deleted!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteAllTasks(req, res) {
  try {
    const result = await taskModel.deleteMany({});
    res.json({
      message: "Tasks deleted!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createNewTask, getTasks, deleteTask, deleteAllTasks };
