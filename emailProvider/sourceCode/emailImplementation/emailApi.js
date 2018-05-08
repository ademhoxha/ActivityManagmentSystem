var IEmailApi = require('./IEmailApi').IEmailApi;
var nodemailer = require('nodemailer');
var config = require('../../config/emailConfig');

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: config.outlookMail.host, // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: config.outlookMail.port, // port for secure SMTP
    tls: {
        ciphers: config.outlookMail.chipers
    },
    auth: {
        user: config.outlookMail.user,
        pass: config.outlookMail.pass
    }
});

class mailApi extends IEmailApi{

    sendEmail(data, callback) {

        var mailOptions = {
            from: '"Watch Me Fly" <'+config.outlookMail.user+'>',
            to: data.receiver,
            subject: data.object,
            text: data.text,
            html: data.html
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return callback(error)
            }
            return callback(undefined, data)
        });
    }
}

var istance = new mailApi();

module.exports = {
    mailApi: istance
}