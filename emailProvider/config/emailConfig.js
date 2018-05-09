class outlookMail {
    constructor() {
        this.user = 'watchmefly001@outlook.com';
        this.pass = 'w@tchm3fl1';
        this.port = 587;
        this.host = "smtp-mail.outlook.com";
        this.chipers = 'SSLv3';
    }
}

var outlookIstance = new outlookMail();

module.exports = {
    outlookMail: outlookIstance
}