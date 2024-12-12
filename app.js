require('dotenv').config()
const nodemailer = require('nodemailer');
const user = process.env.EMAIL
const key = process.env.MAILGUN_API_KEY
// console.log(user, pass)

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'ilene.cummings@ethereal.email',
    pass: 'GHA5REJeW2PprdRvGy'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Steve" <ilene.cummings@ethereal.email>', // sender address
    to: "steveoyeyemi@gmail.com stephenoyeyemi@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
