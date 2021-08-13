import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import InfoSection from "../components/InfoSection"
import imageScripture from "../images/scripture_priscilla-du-preez.jpg"

const storyText = "We started this company to raise the ethical standard in our industry with our clients and our agents. Transparency, honesty, integrity, faith, and love is the backbone of our company. We will strive to always do what’s right no matter the cost. We will unapologetically walk in our faith, conduting ourselves in a fair and honorable manner.";
const storyText2 = "❤️ Most importantly, we started this company based on a need to go through daily life with unwavering purpose and faith. We believe wholeheartedly that together it’s possible. We believe in balance, taking care of and supporting each other in our pursuit of spiritual, emotional, physical, and financial peace. All things are possible with His strength. Our work-family is knowledgeable, capable, and experience. We look forward to coming alongside you in your real estate journey.";

const About = () => (
  <Layout>
    <Seo title="About My True Realty" />
    <InfoSection headerTitle="Our Mission" sectionText={storyText} text2={storyText2} src={imageScripture}></InfoSection>
    <StaticImage
      src="../images/keys.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <Link to="/agents/">Agents Page</Link> <br/>
      <Link to="/about/">About Page</Link> <br/>
      <Link to="/contact/">Contact Page</Link>
    </p>
  </Layout>
)

export default About