import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoprops {
  title: string;
}

export default function Seo({ title }: ISeoprops) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
