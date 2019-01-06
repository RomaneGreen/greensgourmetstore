import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
htmlAttributes={{ lang: 'en' }}
meta={[{ name: 'description', content: siteDescription }]}
title={siteTitle}
link={[{
  href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
  rel:"stylesheet",
  type:"text/css" 
}]}
script={[{ 
  type: 'text/javascript', 
  url:"",
  id: "snipcart",
  "data-api-key": "YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0",
  src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
},{
  type: 'text/javascript',
  src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
}]} />
        )
        
      

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
  `

