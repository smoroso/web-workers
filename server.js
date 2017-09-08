"use strict";

(() => {
  const express = require("express");
  const path    = require("path");

  const app = express();

  app.use(express.static("public")); // necessary to be able to access js and css files on client side

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });

  app.get("/web-worker", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/web-worker/index.html"));
  });

  app.get("/without-web-worker", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/web-worker/without/index.html"));
  });

  app.get("/with-web-worker", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/web-worker/with/index.html"));
  });

  app.get("/service-worker", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/service-worker/index.html"));
  });

  app.get("/without-service-worker", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/service-worker/without/index.html"));
  });

  app.get("/with-service-worker", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/service-worker/with/index.html"));
  });

  const listener = app.listen(8080, () => {
    console.log(`Server started, please go on port ${listener.address().port}`);
  });
})();
