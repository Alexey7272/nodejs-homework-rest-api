const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = process.env;


const sendMail = async ({to, subject, html }) => {
   const from = 'aleksejvitomskij@gmail.com'

    const email = {
        to,
        from,
        subject,
        html,
    }

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        }
    })

    await transport.sendMail(email)
    console.log("Email send")
};


module.exports = sendMail;
