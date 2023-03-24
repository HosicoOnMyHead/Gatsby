import * as React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome to Devstickers 🖐">
      <div></div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
