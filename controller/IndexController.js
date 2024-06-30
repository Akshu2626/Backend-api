const { UserModel } = require("../db/UserModel");
const { catchAsyncError } = require("../middlewires/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");

exports.Homepage = catchAsyncError(async (req, res, next) => {
    res.json({ message: "Secure homepage" });
})

exports.studentsignup = catchAsyncError(async (req, res, next) => {
    const body = req.body;
    await new UserModel(body).save();
    res.json({ 'message': "sucessfull create" })
})


exports.studentsignin = catchAsyncError(async (req, res, next) => {
    const userdata = await UserModel.findOne({ email: req.body.email }).select("+password").exec();

    if (!userdata) return next(new ErrorHandler("User not found", 404))

     const isMatch=userdata.comparepassword(req.body.password);
     if (!isMatch) return next(new ErrorHandler("Wrong Crediential ",500))

    res.json(userdata);
})


exports.studentsignout = catchAsyncError(async (req, res, next) => {

})