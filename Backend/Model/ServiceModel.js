const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    serviceName: {
        type: String,
    },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
