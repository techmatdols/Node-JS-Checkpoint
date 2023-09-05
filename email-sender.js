const nodemailer = require('nodemailer');

// Create a transporter object using your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail', 'yahoo', 'outlook'
  auth: {
    user: 'mudoh160@gmail.com',
    pass: 'inGodwetrust@319',
  },
});

// Email details
const mailOptions = {
  from: 'mudoh160@gmail.com',
  to: 'filtersmedia11@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
