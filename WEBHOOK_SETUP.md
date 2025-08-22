# Webhook Setup Instructions

This guide explains how to set up the secure webhook for the contact form.

## Overview

The contact form now uses a secure webhook instead of Gmail API. This provides:
- ✅ **Security**: Webhook URL is kept secret
- ✅ **Bot Protection**: Honeypot field prevents spam
- ✅ **Scalability**: Ready for rate limiting and validation
- ✅ **Tracking**: UTM parameters and page path tracking

## Setup Steps

### 1. Environment Variables (One Time Setup)

#### For Production (Vercel):
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add: `MAKE_WEBHOOK_URL` = `https://hook.eu2.make.com/8u329wwan07x4euoht8pqp8blbtb90kn`
4. Select **All Environments** (Production, Preview, Development)

#### For Local Development:
1. Copy `env.example` to `.env.local`
2. Fill in your webhook URL
3. Restart your development server

```bash
cp env.example .env.local
# Edit .env.local with your actual webhook URL
npm run dev
```

### 2. Pull Environment Variables Locally (Optional)

If you want to sync your Vercel environment variables locally:

```bash
vercel login
vercel link
vercel env pull .env.local
```

## How It Works

### Security Features:
- **Honeypot Field**: Hidden input that bots fill out (humans don't see it)
- **Environment Variables**: Webhook URL is never exposed in client-side code
- **Server-Side Validation**: All form processing happens on the server

### Data Sent to Webhook:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "CEO",
  "company": "Example Corp",
  "website": "example.com",
  "size": "20-50",
  "revenue": "500K-1M",
  "budget": "20K-100K",
  "service": "developing",
  "message": "I need help with AI...",
  "pagePath": "/",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "branding",
  "sentAt": "2024-01-01T12:00:00.000Z",
  "source": "brandure-website",
  "formType": "contact-inquiry"
}
```

## Testing

1. Fill out the contact form
2. Check your Make.com webhook for incoming data
3. Verify the honeypot field is empty (bots would fill this)
4. Check browser console for any errors

## Troubleshooting

### "Missing MAKE_WEBHOOK_URL" Error:
- Ensure `.env.local` exists and contains the webhook URL
- Restart your development server after adding environment variables
- Check Vercel environment variables are set correctly

### Webhook Not Receiving Data:
- Verify the webhook URL is correct
- Check Make.com webhook is active
- Review server logs for any errors

## Future Enhancements

The system is designed to easily add:
- Rate limiting (e.g., max 5 submissions per hour per IP)
- CAPTCHA integration
- Advanced spam detection
- Analytics and reporting
