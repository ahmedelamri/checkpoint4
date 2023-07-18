const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const parfumControllers = require("./controllers/parfumControllers");

router.get("/parfums", parfumControllers.browse);
router.get("/parfums/:id", parfumControllers.read);
router.put("/parfums/:id", parfumControllers.edit);
router.post("/parfums", parfumControllers.add);
router.delete("/parfums/:id", parfumControllers.destroy);

module.exports = router;
