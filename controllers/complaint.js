const Complaint = require("../models/complaint");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = async (req, res) => {
  const { title, description, transaction_id } = req.body;
  const complaint = new Complaint({
    title,
    description,
    transaction_id,
    status: 0
  });

  await complaint.save((err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    } else
      res.json({
        complaint: data
      });
  });
};

exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    const update = { status: 1 };
    Complaint.findOneAndUpdate({ _id: id }, update, { strict: false }, function (err, docs) {
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
