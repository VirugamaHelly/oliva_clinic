const SliderModel = require("../Model/SliderModel");
const fs = require("fs");
const path = require("path");

// Add slider
const addSlider = async (req, res) => {
    try {
        const imagePath = req.file.filename;
        const newSlider = await SliderModel.create({image : imagePath})
        res.status(201).json({ message: "Slider image added", data: newSlider });
    } catch (error) {
        res.status(500).json({ message: "Error adding slider", error });
    }
};

// Get all sliders
const getAllSliders = async (req, res) => {
    try {
        const sliders = await SliderModel.find();
        res.status(200).json(sliders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sliders", error });
    }
};

// Delete slider
const deleteSlider = async (req, res) => {
    try {
        const id = req.params.id;
        const slider = await SliderModel.findById(id);
        if (!slider) return res.status(404).json({ message: "Slider not found" });

        const filePath = path.join(__dirname, "../uploads", slider.image);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath); // delete image from server
        }

        await SliderModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Slider deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting slider", error });
    }
};

// Update slider image
const updateSlider = async (req, res) => {
    try {
        const id = req.params.id;
        const slider = await SliderModel.findById(id);
        if (!slider) return res.status(404).json({ message: "Slider not found" });

        // delete old image
        const oldPath = path.join(__dirname, "../uploads", slider.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);

        slider.image = req.file.filename;
        await slider.save();

        res.status(200).json({ message: "Slider updated", data: slider });
    } catch (error) {
        res.status(500).json({ message: "Error updating slider", error });
    }
};

module.exports = {
    addSlider,
    getAllSliders,
    deleteSlider,
    updateSlider
};
