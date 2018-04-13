import React from 'react'
import Helmet from 'react-helmet';

export default (props) => {
    return (
        <Helmet>
            <html lang="en" />
            <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
            <meta property="og:locale" content={props.locale} />
            <meta name="author" content={props.author} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={props.twitterHandle} />    
            <meta name="google-site-verification" content={props.googleVerification} />
            <link rel="alternate" type="application/rss+xml" title={`RSS Feed | ${props.siteTitle}`} href={`${props.siteUrl}/rss.xml`} />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />    
        </Helmet>
    );
};