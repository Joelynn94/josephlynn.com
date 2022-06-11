require("dotenv").config();
const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
	const { name, email, message } = req.body;

	try {
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);

		const msg = {
			to: "josephlynn94@gmail.com", // Change to your recipient
			from: "josephlynn.dev@gmail.com", // Change to your verified sender
			subject: `Contact form submission from ${name}`,
			text: `Sent from: ${email}`,
			html: `<p>You have a new contact form submission from the portfolio website:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>`,
		};
		sgMail
			.send(msg)
			.then((data) => {
				console.log("Email sent");
			})
			.catch((error) => {
				console.error(error);
			});
		res.status(200).json({
			message:
				"Your submission was successful! I will typically get back to you within 24 hours. Thank you!",
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message:
				"An error has occured while trying to submit your information. Please try again.",
		});
	}
}
