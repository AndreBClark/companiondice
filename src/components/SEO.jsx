/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { h } from 'preact';
import Helmet from 'preact-helmet';

const SEO = ({ description, lang, meta, keywords, title }) => {
    const site = {
        title: `Companion Dice`,
        author: `Andre Clark`,
        description: `Dice Rolling app for Playing Table Top Games`,
        siteUrl: `https://companiondice.netlify.com`,
        social: {
            github: `AndreBClark`,
        },
    };

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.title}`}
            meta={[
                {
                    name: `description`,
                    content: site.description,
                },
                {
                    property: `og:title`,
                    content: site.title,
                },
                {
                    property: `og:description`,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.author,
                },
                {
                    name: `twitter:title`,
                    content: site.title,
                },
                {
                    name: `twitter:description`,
                    content: site.description,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : []
                )
                .concat(meta)}
        />
    );
};

export default SEO;
