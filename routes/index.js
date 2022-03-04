var express = require('express');
var router = express.Router();
const { body, check } = require("express-validator");


const mainController = require ("../controller/mainController");


/* GET home page. */
router.get('/', mainController.index );     

router.post("/", [
  check("nombre").notEmpty().withMessage("Debe ingresar nombre") ,
  check("email").isEmail().withMessage("El Email debe ser válido"),
  check("color").isLength({min:4}).withMessage("Color NO válido"),
  check("edad").isNumeric().withMessage("Edad no válida")
], mainController.create);

module.exports = router;
