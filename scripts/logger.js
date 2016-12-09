const $ = require('jquery');

var log = (message) => {
    $('#console').append(`<p>${message}</p>`);
    console.log(message);
};

module.exports.log = log;