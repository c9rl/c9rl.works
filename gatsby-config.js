module.exports = {
  siteMetadata: {
    title: `c9rl`,
    author: {
      name: `Carl Bernardo`,
      summary: `who livses and works in Los Angeles building things.`,
    },
    description: `Carl Bernardo's Personal Website.`,
    siteUrl: `http://c9rl.works`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `c9rl.works`,
        short_name: `c9rl`,
        start_url: `/`,
        background_color: `#fffafa`,
        theme_color: `#fffafa`,
        display: `minimal-ui`,
        icon: `content/assets/c9rl-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {

        src: `${__dirname}/src`,
        pages: `${__dirname}/src/pages`,
        styles: `${__dirname}/src/styles`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `c9rl.works`,
        protocol: `https`,
        hostname: `www.c9rl.works`,
      },
    }
  ],
}
