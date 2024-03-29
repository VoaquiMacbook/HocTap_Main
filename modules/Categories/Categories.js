const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySachema = new Schema({
    name: {type: String, required: true},
    parentId:{type: ObjectId, ref:'category'}, 
});
module.exports = mongoose.model('category', CategorySachema);