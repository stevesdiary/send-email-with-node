const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
   }
});

const mailOptions = {
   from: "youremail@email.com",
   to: "yourrecipient@email.com",
   subject: "NODEMAILER TEST",
   text: "Hello World! This is an email from nodemailer"
}

transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
      console.log(error);
   } else {
      console.log('Email sent: '+ info.response);
   }
})