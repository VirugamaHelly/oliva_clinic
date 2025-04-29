const mongoose = require("mongoose")

const SliderSchema = new mongoose.Schema({
    image : {type : String}
})

const SliderModel = new mongoose.model("Slider",SliderSchema)

module.exports = SliderModel