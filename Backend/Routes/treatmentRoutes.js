const express = require("express");
const treatmentrouter = express.Router();
const {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  updateTreatment,
  deleteTreatment,
} = require("../Controller/treatmentController.js");
const upload = require("../Middleware/upload");
const { isAdmin } = require("../Middleware/auth");

treatmentrouter.post("/create",isAdmin, upload.single("image"), createTreatment);
treatmentrouter.get("/get", getAllTreatments);
treatmentrouter.get("/get/:id", getTreatmentById);
treatmentrouter.put("/edit/:id",isAdmin, upload.single("image"), updateTreatment);
treatmentrouter.delete("/delete/:id",isAdmin, deleteTreatment);

module.exports = treatmentrouter;
