import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, role, companyName, companyWebsite, companySize, annualRevenue, projectBudget, serviceInterested, message } = req.body;

    // Create email HTML
    const emailHTML = `
      <h2>New Inquiry from Brandure AI Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Website:</strong> ${companyWebsite}</p>
      <p><strong>Company Size:</strong> ${companySize}</p>
      <p><strong>Annual Revenue:</strong> ${annualRevenue}</p>
      <p><strong>Project Budget:</strong> ${projectBudget}</p>
      <p><strong>Service Interested:</strong> ${serviceInterested}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // For development, just log the email
    console.log('Email would be sent to: sales@brandureai.com');
    console.log('Email content:', emailHTML);

    // For production, set up actual email service
    // Example with Gmail SMTP:
    /*
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'sales@brandureai.com',
      subject: 'New Inquiry from Website',
      html: emailHTML,
    });
    */

    res.status(200).json({ success: true, message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send inquiry' });
  }
}
