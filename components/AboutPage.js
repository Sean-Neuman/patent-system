import React from "react";
import {
  AboutContainer,
  Heading,
  SubHeading,
  Paragraph,
  FeatureList,
  FeatureItem,
} from "./StyledAboutPage";

const AboutPage = () => (
  <AboutContainer>
    <Heading>About Einstein</Heading>
    <Paragraph>
      Einstein is a revolutionary patent system built on blockchain technology,
      offering secure, transparent, and efficient patent registration and
      management. By leveraging the power of blockchain, Einstein ensures that
      inventors' rights are protected in a more accessible and immutable ledger.
    </Paragraph>

    <SubHeading>Features</SubHeading>
    <FeatureList>
      <FeatureItem>
        Decentralized patent management system ensuring security and
        transparency.
      </FeatureItem>
      <FeatureItem>
        Smart contract implementation for automatic royalty distributions.
      </FeatureItem>
      <FeatureItem>
        Global accessibility with a focus on user-friendly interfaces.
      </FeatureItem>
      <FeatureItem>
        Advanced search functionality powered by blockchain's immutable records.
      </FeatureItem>
    </FeatureList>

    <SubHeading>Benefits</SubHeading>
    <Paragraph>
      Utilizing Einstein, inventors and companies can streamline their patent
      filing process, ensure the integrity of their intellectual property, and
      engage with a community of innovators on a secure platform.
    </Paragraph>

    <SubHeading>Join Our Community</SubHeading>
    <Paragraph>
      Be part of a growing ecosystem of inventors and innovators leveraging
      blockchain technology to protect and manage their patents. Contact us to
      learn more about how Einstein can transform your patent management
      experience.
    </Paragraph>
  </AboutContainer>
);

export default AboutPage;
