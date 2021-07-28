import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroElements";

const HeroSection = () => {
 const[hover,setHover]=useState(false);
 const onHover = () =>{
   setHover(!hover)
 }

  return (
    <HeroContainer id="home">
     <HeroBg>
      <VideoBg autoPlay loop muted src={Video} type='vide/mp4' />
     </HeroBg>
      <HeroContent>
       <HeroH1> Virtual Banking Made Easy</HeroH1>
       <HeroP>
        Sign up for a new account today and recieve ₹2000 in credit towards your next payment.
       </HeroP>
       <HeroBtnWrapper>
        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={650} spy={true} exact='true' offset={-80}>
         Get Started {hover ? <ArrowForward /> : <ArrowRight />}
         </Button>
       </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
