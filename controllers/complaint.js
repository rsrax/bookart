const Complaint = require("../models/complaint");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = async (req, res) => {
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
