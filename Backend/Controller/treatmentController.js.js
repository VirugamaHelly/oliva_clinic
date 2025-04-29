const Treatment = require("../Model/treatmentModel");
const path = require("path");
const fs = require("fs");

// Create Treatment
const createTreatment = async (req, res) => {
  try {
    const { Title, Small_description, description } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    const newTreatment = new Treatment({
      image: imagePath,
      Title,
      Small_description,
      description,
    });

    await newTreatment.save();
    res.status(201).json({ message: "Treatment created", data: newTreatment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Treatments
const getAllTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Treatment By ID
const getTreatmentById = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.id);
    if (!treatment) return res.status(404).json({ message: "Not found" });
    res.status(200).json(treatment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Treatment
const updateTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.id);
    if (!treatment) return res.status(404).json({ message: "Not found" });

    const { Title, Small_description, description } = req.body;

    // Delete old image if a new one is uploaded
    if (req.file) {
      const oldImagePath = path.join(__dirname, "../uploads/", treatment.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      treatment.image = req.file.filename;
    }

    treatment.Title = Title;
    treatment.Small_description = Small_description;
    treatment.description = description;

    await treatment.save();
    res.status(200).json({ message: "Updated", data: treatment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Treatment
const deleteTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findByIdAndDelete(req.params.id);
    if (!treatment) return res.status(404).json({ message: "Not found" });

    // Delete image from uploads
    if (treatment.image) {
      const imagePath = path.join(__dirname, "../uploads/", treatment.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  updateTreatment,
  deleteTreatment,
};
