const nodemailer = require("nodemailer");
require("dotenv").config();

export default function handler(req, res) {
  let transporter = nodemailer.createTransport({
    port: 465, // port 465 is for SMTP communication
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: process.env.NODEMAILER_USER,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
      expires: 365,
    },
    secure: true,
  });

  const mailData = {
    from: "demo email",
    to: "your email",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).json({
    message:
      "Submission was successful! I will get back to you within 24 hours.",
  });
}
