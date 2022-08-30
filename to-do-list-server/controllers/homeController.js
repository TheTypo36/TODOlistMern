import express from "express";

const home = (req, res) => {
  return res.status(200).send("<h1>This is to do list</h1>");
};
export default home;
