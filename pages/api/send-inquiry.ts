import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, ...formData } = req.body;

    // Here you would integrate with an email service like SendGrid, Mailgun, etc.
    // For now, we'll just log and return success
    console.log('Sending inquiry to:', to);
    console.log('Form data:', formData);

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // await sendgrid.send({
    //   to: 'sales@brandureai.com',
    //   from: 'noreply@brandureai.com',
    //   subject: 'New Inquiry from Website',
    //   html: generateEmailHTML(formData)
    // });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending inquiry:', error);
    res.status(500).json({ message: 'Failed to send inquiry' });
  }
}
