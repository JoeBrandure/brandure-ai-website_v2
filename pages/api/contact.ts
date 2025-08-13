import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

/*
Required environment variables for production:
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
SMTP_SECURE=false
CONTACT_TO=sales@brandureai.com
CONTACT_FROM=no-reply@brandureai.com

For development without SMTP, the API will use Ethereal for testing.
*/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const { name, email, role, companyName, companyWebsite, companySize, annualRevenue, projectBudget, serviceInterested, message } = req.body || {};

  try {
    let transporter: nodemailer.Transporter;

    // If SMTP not configured, use Ethereal for development
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[contact] SMTP not configured, using Ethereal for development');
      
      // Create Ethereal test account
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      // Use configured SMTP
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Boolean(process.env.SMTP_SECURE === 'true'),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    }

    const to = process.env.CONTACT_TO || 'sales@brandureai.com';
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER || 'no-reply@brandureai.com';

    const info = await transporter.sendMail({
      from: `Brandure.AI Website <${from}>`,
      to,
      subject: `New inquiry from ${name || 'Website'}`,
      replyTo: email || undefined,
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nCompany: ${companyName}\nWebsite: ${companyWebsite}\nCompany Size: ${companySize}\nAnnual Revenue: ${annualRevenue}\nProject Budget: ${projectBudget}\nService Interested: ${serviceInterested}\n\nMessage:\n${message}`,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Role:</strong> ${role}<br/>
        <strong>Company:</strong> ${companyName}<br/>
        <strong>Website:</strong> ${companyWebsite}<br/>
        <strong>Company Size:</strong> ${companySize}<br/>
        <strong>Annual Revenue:</strong> ${annualRevenue}<br/>
        <strong>Project Budget:</strong> ${projectBudget}<br/>
        <strong>Service Interested:</strong> ${serviceInterested}<br/><br/>
        <strong>Message:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}
      `,
    });

    // Log Ethereal preview URL in development
    if (info.messageId && info.previewURL) {
      console.log(`[contact] Email sent! Preview: ${info.previewURL}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    console.error('[contact] send error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send' });
  }
}
