const nodemailer = require("nodemailer");
require("dotenv").config();

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    // setup transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.NODEMAILER_USER,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACCESS_TOKEN,
        expires: 500,
      },
    });

    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    // send the email
    transporter.sendMail(
      {
        from: email,
        to: "josephlynn.dev@gmail.com",
        subject: `Contact form submission from ${name}`,
        text: message + " | Sent from: " + email,
        html: `<p>You have a new contact form submission</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>`,
      },
      (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info.envelope);
          console.log(info.messageId);
        }
        res.status(200).json({
          message:
            "Your submission was successful! I will typically get back to you within 24 hours. Thank you!",
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "An error has occured while trying to submit your information.",
    });
  }
}
