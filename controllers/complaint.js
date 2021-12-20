const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

// Complaint Schema
const Complaint = require("../models/complaint");

// Handle database error
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = async (req, res) => {
  // Formidable is used to handle form data. we are using it to handle image upload
  let form = new formidable.IncomingForm();
  form.keepExtensions = true; // Extension for images
  form.parse(req, (err, fields, files) => {
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

      res.json({
        complaint: data
      });
    });
  });
};

// Update a complaint
exports.update = async (req, res) => {
  // Formidable is used to handle form data. we are using it to handle image upload
  let form = new formidable.IncomingForm();
  form.keepExtensions = true; // Extension for images

  form.parse(req, (err, fields, files) => {
    // Update complaint
    let complaint = req.complaint;
    complaint = _.extend(complaint, fields);

    // Save the new complaint
    complaint.save((err, data) => {
      if (err) return res.status(400).json({ msg: errorHandler(err) });

      res.json({
        complaint: data
      });
    });
  });
};

// const Complaint = require("../models/complaint");
// const { errorHandler } = require("../helpers/dbErrorHandler");

// exports.create = async (req, res) => {
//   const { title, description, transaction_id } = req.body;
//   const complaint = new Complaint({
//     title,
//     description,
//     transaction_id,
//     status: 0
//   });

//   await complaint.save((err, data) => {
//     if (err) {
//       return res.status(400).json({ error: err });
//     } else
//       res.json({
//         complaint: data
//       });
//   });
// };

// exports.update = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const update = { status: 1 };
//     Complaint.findOneAndUpdate({ _id: id }, update, { strict: false }, function (err, docs) {
//       if (docs) {
//         return res.json({ msg: "Status Updated" });
//       } else {
//         return res.status(400).json({ msg: "Status update Failed" });
//       }
//     });
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler(err) });
//   }
// };
