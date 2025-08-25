import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  twitterHandle?: string;
}

export default function SEO({
  title = "Brandure AI - Your Trusted Partner in AI-Powered Business Transformation",
  description = "Transform your business with AI. Brandure AI helps you identify, develop, and scale high-impact AI opportunities. Expert AI consulting and implementation services.",
  keywords = "AI consulting, business transformation, artificial intelligence, AI implementation, machine learning, automation, digital transformation, AI strategy",
  image = "/Logos/brandure-logo-new-colour.png",
  url = "https://brandureai.com",
  type = "website",
  siteName = "Brandure AI",
  twitterHandle = "@brandureai"
}: SEOProps) {
  const fullTitle = title === "Brandure AI" ? title : `${title} | ${siteName}`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Brandure AI" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta property="twitter:creator" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brandure AI",
            "url": "https://brandureai.com",
            "logo": "https://brandureai.com/Logos/brandure-logo-new-colour.png",
            "description": description,
            "sameAs": [
              "https://twitter.com/brandureai",
              "https://linkedin.com/company/brandureai"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service",
              "email": "sales@brandureai.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "serviceType": "AI Consulting and Implementation",
            "areaServed": "Worldwide"
          })
        }}
      />
    </Head>
  );
}
