import React, { useState } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    // Handle form submission logic

    // const formData = new FormData(e.target);
    // const data = {};
    // formData.forEach((value, key) => {
    //   data[key] = value;
    // });
    // console.log("formData---", formData);
    

    e.preventDefault();
    // You can send data to Mailchimp or perform other actions
    // Close the modal after form submission
    closeModal();
  };

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>the coolest, WhatsApp CRM you have ever seen</CustomOverTitle>
        <Heading>Automate Business with WhatsApp</Heading>
        <Description>
        Complete, Ready-to-Use Software for All Your Business Needs | WhatsApp CRM | Customer Support tool | AI Chatbot Development
        </Description>
        <CustomButtonGroup>
          {/* <NextLink href="https://forms.gle/CmYx84QaTkLceJPK8" passHref > */}
          {/* <Button onClick={() => setIsModalOpened(true)}> */}
            <Button onClick={openModal}>
              Get Early Access <span>&rarr;</span>
            </Button>
          {/* </NextLink> */}
          <NextLink href="https://wa.me/919820973885?text=Hi" passHref>
            <Button transparent>
              Chat with us <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <form onSubmit={handleSubmit}>
              {/* Your form inputs go here */}
              <label>
                Full Name:
                <input type="text" name="fullName" required />
              </label>
              <label>
                Full Name:
                <input type="text" name="fullName" required />
              </label>
              <label>
                Full Name:
                <input type="text" name="fullName" required />
              </label>
              <label>
                Full Name:
                <input type="text" name="fullName" required />
              </label>
              {/* Add other input fields as needed */}
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </Modal>
        </ModalOverlay>
      )}

      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;