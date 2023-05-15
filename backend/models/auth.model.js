const mongoose = require('mongoose');



const authSchema = mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
    age: { type: Number }
}, {
    versionKey: false
});




const AuthModel = mongoose.model('user', authSchema);



module.exports = { AuthModel };