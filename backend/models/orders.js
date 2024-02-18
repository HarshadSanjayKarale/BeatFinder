const mongoose = require("mongoose");
const deepPopulate = require("mongoose-deep-populate")(mongoose);
const schema = mongoose.Schema;

const orderSchema = new schema({
	owner: {
		type: schema.Types.ObjectId,
		ref: "User",
	},
	totalPrice: {
		type: Number,
		default: 0,
	},
	products: [
		{
			product: {
				type: schema.Types.ObjectId,
				ref: "Product",
			},
			quantity: {
				type: Number,
				default: 1,
			},
		},
	],
});

//Using deep-populate to facilitate rating feature
OrderSchema.plugin(deepPopulate);

//Exporting the Order schema to reuse 
module.exports = mongoose.model('Order', OrderSchema);
