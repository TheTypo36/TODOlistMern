import express from "express";
import Task from "../models/Task.js";
const home = (req, res) => {
  return res.status(200).send("<h1>This is to do list</h1>");
};
const addTask = (req, res) => {
  Task.create(req.body, (err, data) => {
    console.log("here", req.body);
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
};

const getTask = (req, res) => {
  Task.find((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.status(200).send(data);
    }
  });
};
const delTask = (req, res) => {
  console.log("req", req.body);
  Task.deleteOne({ _id: req.body._id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      Task.find((err, data) => {
        console.log("data", data);
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(data);
        }
      });
    }
  });
};
export { home, addTask, getTask, delTask };
