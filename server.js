const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Appointment booking endpoint
app.post('/api/book-appointment', async (req, res) => {
  const { fullName, email, phone, preferredDate, department } = req.body;

  try {
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hadjbrahimyasmine@gmail.com',
      subject: 'New Appointment Request',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Department:</strong> ${department}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Appointment request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending appointment request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 