const express = require("express")
const tasks = require("./tasks.json")
const app = express()
const router = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log(`run on ${process.env.PORT || 3000}`);
  });
  

  
  router.get("/tasks", (req, res) => {
    res.json(tasks)
  });
  router.get("/tasks/:id",(req, res) => {
    const { id } = req.params;
    const tasksId = tasks.find((item) => item.id == id)
    if (!tasksId)  return res.sendStatus(404)
    res.json(tasksId)});

  router.post("/tasks", (req, res) => {
    const newTask = {
      id: tasks.length + 1,
      task: req.body.task,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  router.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const updatetask = tasks.findIndex((item) => item.id == id);
    if (updatetask === -1) {
      return res.status(404).send("task not found");
    }
    tasks[updatetask] = {
      id: tasks[updatetask].id,
      task
    };
    res.status(200).json("task updated");});
  router.delete ("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const task = tasks.findIndex((item) => item.id == id);
    if (task === -1) {
      return res.status(404).send("Task not found");
    }
    tasks.splice(task, 1);
    res.status(200).json("TASK deleted");
  })
  
  app.use("/", router);