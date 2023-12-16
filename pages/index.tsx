import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          {/* <BasicSection imageUrl="/demo-illustration-1.svg" title="WhatsApp Campaigns" overTitle="WhatsApp Broadcast CRM"> */}
          <BasicSection imageUrl="/images/Broadcast.png" title="WhatsApp Campaigns" overTitle="WhatsApp Broadcast CRM">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p> */}
            <p>
            Schedule & Send highly personalized WhatsApp messages to{' '}
              <strong>streamline your marketing</strong>. and driving higher sales.
            </p>
            <ul>
              <li>Tag and categorize your customers using personalized communications.</li>
              <li>Schedule campaigns and engage with 75% higher response rate.</li>
              <li>Build and nurture the relationships</li>
            </ul>
          </BasicSection>
          {/* <BasicSection imageUrl="/demo-illustration-2.svg" title="Shared Team Inbox + Automations." overTitle="Customer Support tool" reversed> */}
          <BasicSection imageUrl="/images/Support_tool.png" title="Shared Team Inbox + Automations." overTitle="Customer Support tool" reversed>
            <p>
            connects popular <strong>customer communication channels</strong> like Website live-chat, Facebook, WhatsApp, Instagram, Line, etc.
            </p>
            <ul>
              <li>[ChatGPT integration] AI-generated reply suggestions for faster responses</li>
              <li>Easily add yourself or fellow agents as participants to a conversation</li>
              <li>Personalize your Canned Responses</li>
              <li>Video call your customers from website live chat</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */}
          <FeaturesGallery />
          <Features />
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
