import React from 'react'
import Helmet from 'react-helmet';

export default (props) => {

    const seoData = {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: props.siteUrl,
        name: props.title
    };

    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={props.siteUrl} />
            <meta property="og:site_name" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:site" content={props.siteUrl} />
            <link rel="canonical" href={props.siteUrl} />
            <link rel="preload" href={props.meSmall} as="image" media="(max-width: 25em) and (max-width: 31.24em)" />
            <link rel="preload" href={props.meMedium} as="image" media="(min-width: 31.24em)" />
            <script type="application/ld+json">
                {JSON.stringify(seoData)}
            </script>
        </Helmet>
    );
};