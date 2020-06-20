import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          author
          data
          description
          title
          person {
            age
            name
          }
        }
      }
    }
  `);
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <h2>{data.site.siteMetadata.person.age}</h2>
    </div>
  );
};

export default Header;
