import React from 'react'
import Helmet from 'react-helmet';

export default (props) => {
    return (
        <Helmet>
            <html lang="en" />
            <title>{`${props.titlePrefix} | ${props.title}`}</title>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
            <meta name="author" content={props.author} />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta property="og:locale" content={props.locale} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${props.titlePrefix} | ${props.title}`} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={props.siteUrl} />
            <meta property="og:site_name" content={props.title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:title" content={`${props.titlePrefix} | ${props.title}`} />
            <meta name="twitter:site" content={props.siteUrl} />
            <meta name="twitter:creator" content={props.twitterHandle} />
            <meta name="google-site-verification" content={props.googleVerification} />
            <link rel="canonical" href={props.siteUrl} />
            <link rel="preload" href={props.meSmall} as="image" media="(max-width: 44.9375em)" />
            <link rel="preload" href={props.meMedium} as="image" media="(min-width: 45em) and (max-width: 63.9375em)" />
            <link rel="preload" href={props.meMedium} as="image" media="(max-width: 64em)" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        </Helmet>
    );
};