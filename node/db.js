var mongoose = require( 'mongoose');

mongoose.connect('mongodb://127.0.0.1/codemobiles_com', { useNewUrlParser: true })

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose defualt connection disconnected through app termination');
        process.exit(0);
    });
});