const Product = require('../model/Product');

module.exports = {
	async createProduct(req, res) {
		// minor validation
		if (req.body != '' || null) {
			const { name, description, price, category, image, color } = req.body;
			const product = new Product({
				name,
				description,
				price,
				category,
				image,
				color
			});
			await product.save((error) => {
				if (error) {
					throw new Error(error);
				}
				return res.status(200).json({ success: true, message: 'product saved' });
			});
		} else {
			return res.status(500).json({ success: false, message: 'request failed' });
		}
	},
	async getProducts(req, res) {
		try {
			const allProducts = await Product.find({});
			res.status(200).json({ allProducts });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
	async getOneProduct(req, res) {
		try {
			const product = await Product.findById(req.params.id);
			res.status(200).json({ product });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
};
