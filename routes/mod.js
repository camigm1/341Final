const express = require("express");
const router = express.Router();
const {saveMod} = require('../middleware/validateMod')
const modController = require("../controller/mod");

router.get("/", modController.getAll);

router.get("/:id", modController.getSingle);

router.post("/", saveMod,modController.createMod);

router.put("/:id",saveMod, modController.updateMod);

router.delete("/:id", modController.deleteMod);

module.exports = router;