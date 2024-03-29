const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSachema = new Schema({
    name: {type: String, required: true},
    images:[String], // [link1, link2]
    price: {type: Number, default: 0},
    size: String,
    qty: Number,
    originer: String,
    parentId:{type: ObjectId, ref:'category'}, 
});
module.exports = mongoose.model('product', ProductSachema);