// khai bao 1 model user
// (id,name, password, role, email, verified, carts, created_at, updated_at)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    // role 1: admin, 2: user, 3: manager
    role: { type: Number, default: 2 },
    email: { type: String, required: true, unique: true },
    verified: { type: Boolean, default: false },
    carts: { type: Array, default: [] },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

})

module.exports = mongoose.models.user || 
                mongoose.model('user', UserSchema);