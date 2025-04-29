const Service = require('../Model/ServiceModel');

// Add a new service
exports.addService = async (req, res) => {
  const { description, serviceName } = req.body;

  try {
    const newService = new Service({
      description,
      serviceName,
    });

    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ message: "Error adding service", error });
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ message: "Error fetching services", error });
  }
};

// Edit a service
exports.editService = async (req, res) => {
  const { id } = req.params;
  const { description, serviceName } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { description, serviceName },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json({ message: "Error updating service", error });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting service", error });
  }
};
