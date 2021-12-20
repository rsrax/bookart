const Complaint = require("../models/complaint");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = async (req, res) => {
<<<<<<< HEAD
  // Formidable is used to handle form data. we are using it to handle image upload
  let form = new formidable.IncomingForm();
  form.keepExtensions = true; // Extension for images
  form.parse(req, (err, fields) => {
    // check for all fields
    const { title, description, transaction_id } = fields;
    if (!title || !description || !transaction_id) {
      return res.status(400).json({
        err: "All fields are required"
      });
    }

    // Create new product now
    let complaint = new Complaint({
      title,
      description,
      transaction_id,
      user_id: req.params.userId
    });
    // Save the new complaint
    complaint.save((err, data) => {
      if (err) return res.status(400).json({ msg: errorHandler(err) });
=======
  const { title, description, transaction_id } = req.body;
  console.log(req.body);
  console.log(req.params.userId);
  const complaint = new Complaint({
    title,
    description,
    transaction_id,
    status: 0,
    user_id: req.params.userId
  });
>>>>>>> d424afce2b6dfecf850eac89842774a09bf64e62

  await complaint.save((err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    } else
      res.json({
        complaint: data
      });
  });
};

exports.update = async (req, res) => {
  try {
    const update = { status: 1 };
    Complaint.findOneAndUpdate({ _id: req.params.complaintId }, update, { strict: false }, function (err, docs) {
      if (docs) {
        return res.json({ msg: "Status Updated" });
      } else {
        return res.status(400).json({ msg: "Status update Failed" });
      }
    });
  } catch (err) {
    return res.status(400).json({ error: errorHandler(err) });
  }
};

exports.list = async (req, res) => {
  Complaint.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({ msg: errorHandler(err) });
    }

    return res.json(data);
  });
};
