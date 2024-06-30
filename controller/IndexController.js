const { catchAsyncError } = require("../middlewires/catchAsyncError");

exports.Homepage = catchAsyncError(async (req, res, next) => {
    res.json({ message: "Secure homepage" });
})