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

const panierControllers = require("./controllers/panierControllers");

router.get("/paniers", panierControllers.browse);
router.get("/paniers/:id", panierControllers.read);
router.put("/paniers/:id", panierControllers.edit);
router.post("/paniers", panierControllers.add);
router.delete("/paniers/:id", panierControllers.destroy);

const ajouterControllers = require("./controllers/ajouterControllers");

router.get("/ajouters", ajouterControllers.browse);
router.get("/ajouters/:id", ajouterControllers.read);
router.put("/ajouters/:id", ajouterControllers.edit);
router.post("/ajouters", ajouterControllers.add);
router.delete("/ajouters/:id", ajouterControllers.destroy);

const usersControllers = require("./controllers/usersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
