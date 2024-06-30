const { connect } = require('mongoose');

exports.DatabaseConnet = async () => {
    try {
        await connect('mongodb://localhost:27017/PhonePay');
        console.log("connection stablish");
    } catch (error) {
        console.log(error);
    }
}

