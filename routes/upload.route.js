const express = require("express");
const router = express.Router();

const controller = require("../controller/fileUpload.controller");

let routes = (app) => {
  router.post("/upload-file", controller.uploadFile)

  router.get("/files", controller.getFilesList)

  router.get("/files/:name", controller.downloadFiles)

  app.use(router);
};

module.exports = routes;
