const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    roles: [],
    status: {
        type: Boolean,
        default: false,
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

// userSchema.pre("save", function (next) {
//     console.log(this.password);
//     this.password = bcrypt.hashSync(this.password, 10);
//     console.log(this.password);
//     next();
// });

module.exports = mongoose.model("User", userSchema);