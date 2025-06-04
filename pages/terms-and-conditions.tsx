import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - {EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Review the terms and conditions for using our platform and services."
        />
      </Head>
      <PageWrapper>
        <WhiteBackgroundContainer>
          <BasicSection title="Terms and Conditions" overTitle="Legal Agreement" imageUrl="/images/Broadcast.png">
            <p>
              By using {EnvVars.SITE_NAME}, you agree to abide by our terms and conditions. Please review them carefully.
            </p>
            <ul>
              <li><strong>Acceptance:</strong> Your use of the site means you accept these terms.</li>
              <li><strong>Usage:</strong> Do not misuse or violate our services or content.</li>
              <li><strong>Accounts:</strong> You’re responsible for keeping your login credentials secure.</li>
              <li><strong>Termination:</strong> We reserve the right to suspend or terminate accounts for any abuse.</li>
              <li><strong>Liability:</strong> We are not liable for any damages resulting from site use.</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 10rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  padding-top: 8rem;

  & > :not(:first-child) {
    margin-top: 10rem;
  }
`;
