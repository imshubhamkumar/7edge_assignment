const express = require("express");
const router = express.Router();

const Employee = require("../Model/Employee.module");

router.get("/employee", async (req, res, next) => {
  try {
    const employee = await Employee.find({},{__v: 0});
    res.send(employee);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/employee", (req, res, next) => {
  const emp = new Employee({
    name: req.body.name,
    eid: req.body.eid,
    dob: req.body.dob,
    createTime: Date.now(),
    updateTime: Date.now()
  });

  emp
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get("/employee/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findById(id);
        res.send(employee);
      } catch (error) {
        console.log(error.message);
      }
});

router.patch("/:id", (req, res, next) => {});

router.delete("/del/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
        const parentEid = await Employee.find({_id:id},{_id:0,eid:1});
        await Employee.findOneAndUpdate({eid:id},{eid:parentEid[0].eid, updateTime: Date.now()})
        //const employee = await Employee.findByIdAndDelete(id);
        res.send(employee);
      } catch (error) {
        console.log(error.message);
      }
});

module.exports = router;
