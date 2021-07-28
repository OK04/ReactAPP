import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
  FooterLink,SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {FaFacebook, FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';

const Footer = () => {

  const toggleHome = ()=>{
    scroll.scrollToTop();
  }

  return (
    <>

    <FooterContainer>
     <FooterWrap>
      <FooterLinksContainer>
       <FooterLinksWrapper>
        <FooterLinkItems>
         <FooterLinkTitle>About us</FooterLinkTitle>

          <FooterLink to="/"> How it Works </FooterLink>
          <FooterLink to="/"> Carrers </FooterLink>
          <FooterLink to="/"> Testimonials </FooterLink>
          <FooterLink to="/"> Terms of Service </FooterLink>
          <FooterLink to="/"> Investors </FooterLink>

        </FooterLinkItems>

        <FooterLinkItems>
         <FooterLinkTitle>Videos </FooterLinkTitle>

          <FooterLink to="/"> Submit Video </FooterLink>
          <FooterLink to="/"> Ambassadors </FooterLink>
          <FooterLink to="/signin"> Agency </FooterLink>
          <FooterLink to="/signin"> Influencer</FooterLink>

        </FooterLinkItems>

       </FooterLinksWrapper>

       <FooterLinksWrapper>
        <FooterLinkItems>
         <FooterLinkTitle>Contact us</FooterLinkTitle>

          <FooterLink to="/signin"> Contact </FooterLink>
          <FooterLink to="/signin"> Support </FooterLink>
          <FooterLink to="/"> Destinations </FooterLink>
          <FooterLink to="/"> Sponsorships </FooterLink>

        </FooterLinkItems>

        <FooterLinkItems>
         <FooterLinkTitle>Social Media </FooterLinkTitle>

          <FooterLink to="/signin"> Instagram </FooterLink>
          <FooterLink to="/signin"> Facebook </FooterLink>
          <FooterLink to="/signin"> Youtube </FooterLink>
          <FooterLink to="/signin"> Twitter </FooterLink>
          <FooterLink to="/signin"> Linkedin </FooterLink>

        </FooterLinkItems>

       </FooterLinksWrapper>

      </FooterLinksContainer>
      <SocialMedia>
       <SocialMediaWrap>
       <SocialLogo to='/' onClick={toggleHome}>
       Yulu
       </SocialLogo>
       <WebsiteRights> Yulu @ {new Date().getFullYear()} All rights reserved. </WebsiteRights>
       <SocialIcons>
        <SocialIconLink href='https://www.facebook.com/' target="_blank" aria-label="Facebook">
        <FaFacebook />
        </SocialIconLink>

        <SocialIconLink href='https://www.instagram.com/' target="_blank" aria-label="Instagram">
        <FaInstagram />
        </SocialIconLink>

        <SocialIconLink href='https://www.youtube.com/' target="_blank" aria-label="Youtube">
        <FaYoutube />
        </SocialIconLink>

        <SocialIconLink href='https://twitter.com/?lang=en' target="_blank" aria-label="Twitter">
        <FaTwitter />
        </SocialIconLink>

        <SocialIconLink href='https://www.linkedin.com/feed/' target="_blank" aria-label="Linkedin">
        <FaLinkedin />
        </SocialIconLink>

       </SocialIcons>
       </SocialMediaWrap>
      </SocialMedia>
     </FooterWrap>
    </FooterContainer>

    </>
  )
}

export default Footer
