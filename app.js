const nodemailer = require('nodemailer');

// Replace these values with your SMTP server details
const smtpConfig = {
  host: 'your-smtp-host.com',
  port: 587, // 587 for TLS, 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-smtp-username',
    pass: 'your-smtp-password',
  },
};

// Create a transporter object
const transporter = nodemailer.createTransport(smtpConfig);

// Test the SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection failed:', error);
  } else {
    console.log('SMTP connection successful');
  }
});

// Close the connection when done testing
transporter.close();
