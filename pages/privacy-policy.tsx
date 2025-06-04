import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
      <RichText>
        <p>
          At Lifeel, we are committed to protecting your personal information and your right to privacy. This Privacy Policy
          outlines how we collect, use, store, and disclose your data when you use our website or services. By accessing or using our platform,
          you consent to the practices described below.
        </p>

        <br />

        <strong>1. Information We Collect</strong>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you interact with us, we may collect data such as your name, email, phone number, or
            payment information.
          </li>
          <li>
            <strong>Usage Data:</strong> We automatically collect certain data like IP address, browser type, pages visited, and session
            duration to improve performance and analytics.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance user experience and personalize content.
          </li>
        </ul>

        <br />

        <strong>2. How We Use Your Data</strong>
        <ul>
          <li>To provide and maintain our services, including customer support and transaction processing.</li>
          <li>To personalize and improve your experience with tailored content and recommendations.</li>
          <li>To analyze usage patterns, detect fraud, and ensure platform security.</li>
          <li>To send updates, marketing messages (only with your consent), and other relevant information.</li>
        </ul>

        <br />

        <strong>3. Sharing & Disclosure</strong>
        <ul>
          <li>We do not sell your personal information to third parties.</li>
          <li>We may share data with trusted vendors or partners under strict confidentiality agreements.</li>
          <li>We may disclose information if required by law or to protect our legal rights.</li>
        </ul>

        <br />

        <strong>4. Data Retention & Security</strong>
        <ul>
          <li>We retain your personal data only as long as necessary for legal or operational purposes.</li>
          <li>We implement industry-standard security measures to protect against unauthorized access or misuse.</li>
        </ul>

        <br />

        <strong>5. Your Privacy Rights</strong>
        <ul>
          <li>You may access, correct, or delete your personal data by contacting us.</li>
          <li>You can opt out of marketing communications at any time.</li>
          <li>Residents of certain regions (e.g., EU/EEA) may have additional rights under applicable laws.</li>
        </ul>

        <br />

        <strong>6. Children’s Privacy</strong>
        <p>
          Our services are not intended for children under 13. We do not knowingly collect personal data from minors. If you believe a child
          has provided us with data, please contact us immediately.
        </p>

        <br />

        <strong>7. Changes to This Policy</strong>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. We
          encourage you to review it regularly.
        </p>

        <br />

        <strong>8. Contact Us</strong>
        <p>
          If you have any questions or concerns about this Privacy Policy, you can contact us at: <br />
          <a href="mailto:info@lifeel.in">info@lifeel.in</a>
        </p>
      </RichText>

      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
