const { Schema, model } = require('mongoose');
const bycrpt = require('bcryptjs');

const usermodel = Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    }
});

usermodel.pre("save", function () {
    if (!this.isModified("password")) {
        return;
    }
    let salt = bycrpt.genSaltSync(10);
    this.password = bycrpt.hashSync(this.password, salt);
})


usermodel.methods.comparepassword = function (password) {
    return bycrpt.compareSync(password, this.password);
}


exports.UserModel = model('UserData', usermodel);

