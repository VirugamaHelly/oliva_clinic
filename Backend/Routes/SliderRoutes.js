const express = require("express");
const sliderRoutes = express.Router();
const { addSlider, deleteSlider, updateSlider, getAllSliders } = require("../Controller/SliderControler");
const { isAdmin } = require("../Middleware/auth");
const upload = require("../Middleware/upload"); 

sliderRoutes.get("/get", getAllSliders);
sliderRoutes.post("/add",isAdmin, upload.single("image"), addSlider);
sliderRoutes.delete("/delete/:id", isAdmin, deleteSlider);
sliderRoutes.put("/update/:id", isAdmin, upload.single("image"), updateSlider);

module.exports = sliderRoutes;
