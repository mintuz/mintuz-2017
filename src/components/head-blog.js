import React from 'react'
import Helmet from 'react-helmet';
import me from '../images/me-medium.jpg';

export default (props) => {

    const seoData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "author": props.author,
        "datePublished": props.datePublished,
        "headline": props.title,
        "image": {
            "@type": "imageObject",
            "url": me,
            "height": "640",
            "width": "800"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Mintuz",
            "logo": {
                "@type": "imageObject",
                "url": me
            }
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(seoData)}
            </script>
        </Helmet>
    );
};