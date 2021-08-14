import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import SellerSection from "../components/SellerSection/index"
import BuyerSection from "../components/BuyerSection"

const navigatorText = "You may be in the process of making one of the biggest financial onvestments of your life - buying or selling real estate. Everyone, from first time home-buyers to seasoned investors, has come to the right place. We will help guide you on your next real estate endevour.";


const IndexPage = () => (
  <Layout>
    <Seo title="My True Realty Real Estate Services Home Page" />
    <HeroSection></HeroSection>
    <InfoSection headerTitle="Real Estate Navigators" sectionText={navigatorText}></InfoSection>
    <BuyerSection></BuyerSection>
    <SellerSection></SellerSection>
    
    <StaticImage
      src="../images/scripture_priscilla-du-preez.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
