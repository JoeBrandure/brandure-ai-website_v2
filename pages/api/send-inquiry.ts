import { NextApiRequest, NextApiResponse } from 'next';

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  role?: string;
  company?: string;
  website?: string;
  size?: string;
  revenue?: string;
  budget?: string;
  service?: string;
  message: string;
  pagePath?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  honeypot?: string; // honeypot field
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body as Payload;

    // Honeypot protection - if honeypot field is filled, it's likely a bot
    if (data.honeypot) {
      console.log('Bot detected via honeypot field');
      return res.status(200).json({ ok: true }); // Return success to avoid bot detection
    }

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ ok: false, error: "Invalid email format" });
    }

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("Missing MAKE_WEBHOOK_URL environment variable");
      return res.status(500).json({ ok: false, error: "Server misconfigured" });
    }

    // Prepare payload for webhook
    const webhookPayload = {
      ...data,
      sentAt: new Date().toISOString(),
      source: 'brandure-website',
      formType: 'contact-inquiry'
    };

    console.log('Sending to webhook:', {
      name: data.name,
      email: data.email,
      company: data.company,
      timestamp: webhookPayload.sentAt
    });

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('Webhook error:', webhookResponse.status, errorText);
      return res.status(502).json({ ok: false, error: "Upstream service error" });
    }

    console.log('Webhook response successful');
    return res.status(200).json({ ok: true });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('send-inquiry error:', errorMessage);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
