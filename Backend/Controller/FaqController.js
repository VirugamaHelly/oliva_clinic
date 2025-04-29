const Faq = require('../Model/FaqModel');

// Add FAQ (only admin)
exports.addFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new Faq({ question, answer });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all FAQs
exports.getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
