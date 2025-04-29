require('dotenv').config();
const express = require("express");
const db = require("./Config/db");
const sliderRoutes = require('./Routes/SliderRoutes');
const userRouter = require('./Routes/userRoutes');
const cors = require("cors");
const path = require("path");
const serviceRouter = require('./Routes/serviceRoutes');
const treatmentrouter = require('./Routes/treatmentRoutes');
const FAQrouter = require('./Routes/FaqRoutes');

const app = express();  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/slider", sliderRoutes);
app.use("/user", userRouter);
app.use('/services', serviceRouter);
app.use("/treatment", treatmentrouter);
app.use("/faqs",FAQrouter)


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
