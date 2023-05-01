const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter last name"],
    },
});

module.exports = mongoose.model("Users", UserSchema);
