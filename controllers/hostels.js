const Hostel = require('../models/Hostel');

// @desc    Get all hostels
// @route   GET /api/v1/hostels
// @access  Public
exports.getHostels = async (req, res, next) => {
  try {
    const hostels = await Hostel.find();

    res.status(200).json({ success: true, data: hostels });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single hostel
// @route   GET /api/v1/hostels/:id
// @access  Public
exports.getHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.findById(req.params.id);

    if (!hostel) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: hostel });
  } catch (err) {
    next(err);
  }
};

// @desc    Create hostel
// @route   POST /api/v1/hostels
// @access  Private
exports.createHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.create(req.body);

    res.status(201).json({
      success: true,
      data: hostel,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update hostel
// @route   PUT /api/v1/hostels/:id
// @access  Private
exports.updateHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!hostel) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: hostel });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete hostel
// @route   DELETE /api/v1/hostels/:id
// @access  Private
exports.deleteHostel = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete hostel ${req.params.id}` });
};
