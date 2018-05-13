class outlookMail {
    constructor() {
        this.user = 'watchmefly002@outlook.com';
        this.pass = 'w@tchm3fl2';
        this.port = 587;
        this.host = "smtp-mail.outlook.com";
        this.chipers = 'SSLv3';
    }
}

var outlookIstance = new outlookMail();

module.exports = {
    outlookMail: outlookIstance
}