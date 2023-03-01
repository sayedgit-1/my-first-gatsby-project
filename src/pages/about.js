import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Page" />;

export default AboutPage;
