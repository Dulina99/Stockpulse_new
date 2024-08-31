const BoM = require('../models/boMModel');

// Create a new BoM
exports.createBoM = async (req, res) => {
  try {
    const { name, description, items } = req.body;

    // Create a new BoM document
    const newBoM = new BoM({
      name,
      description,
      items, // This will include all BoMItem details
    });

    // Save the BoM document to the database
    const savedBoM = await newBoM.save();

    res.status(201).json(savedBoM);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
