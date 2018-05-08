// email: watchmefly001@outlook.com password: w@tchm3fl1

var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'watchmefly001@outlook.com',
        pass: 'w@tchm3fl1'
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    //from: '"Watch Me Fly" <watchmefly001@outlook.com>', // sender address (who sends)
    from: '', 
    to: 'adem.hoxha@hotmail.it', // list of receivers (who receives)
    subject: 'test ', // Subject line
    text: 'test ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});