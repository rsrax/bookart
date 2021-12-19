const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
	{
		_id: { type: String },

		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 32,
		},

		description: {
			type: String,
			required: true,
			maxlength: 2000,
		},

		price: {
			type: Number,
			trim: true,
			required: true,
		},

		category: {
			type: ObjectId,
			ref: "Category",
			required: true,
		},

		quantity: {
			type: Number,
		},

		sold: {
			type: Number,
			default: 0,
		},

		photo: {
			data: Buffer,
			contentType: String,
		},

		// id of the seller who created the product
		seller: {
			type: ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

productSchema.virtual("isbn").get(function () {
	return this._id;
});

module.exports = mongoose.model("Product", productSchema);
