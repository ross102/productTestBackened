const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: String,
	description: String,
	price: Number,
	category: String,
	image: String,
	color: String,
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Product', ProductSchema);
