const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillSachema = new Schema({
    orderDate: {type: Date, default: Date.now()},
    userId:{type: ObjectId, ref:'user'}, 
    product:[
        {
            product: {type: ObjectId, ref:'product'},
            qty: Number
        }
    ],
    // total:
});
module.exports = mongoose.model('category', BillSachema);