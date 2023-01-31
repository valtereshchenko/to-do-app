const express = require("express");
const static = require("serve-static");
const router = express.Router();
const taskController = require("../controllers/taskControllers");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());
app.set("view engine", "ejs");
app.use(static(__dirname + "/public"));

router.post("/", urlencodedParser, taskController.createNewTask); // first create a model, than a route and the a controller

router.get("/", taskController.getTasks); // once create new task is created, get the task.

//router.get('/:id', taskController.getTask);

router.delete("/", taskController.deleteTask);

router.delete("/deleteAll", taskController.deleteAllTasks);

module.exports = router;
