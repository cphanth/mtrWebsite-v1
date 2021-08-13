import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"

const IndexPage = () => (
  <Layout>
    <Seo title="My True Realty Real Estate Services Home Page" />
    <HeroSection></HeroSection>
    <InfoSection></InfoSection>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br/>
      <Link to="/agents/">Agents Page</Link> <br/>
      <Link to="/about/">About Page</Link> <br/>
      <Link to="/contact/">Contact Page</Link>
    </p>
  </Layout>
)

export default IndexPage
