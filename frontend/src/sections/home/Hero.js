import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { m } from "framer-motion";
import { SliderData as slides } from "../home/data/SliderData";
import { MotionContainer } from "../../components/animate";
import { LandingContent, Satisfaction } from ".";

// ----------------------------------------------------------------------

const HeroOverlayStyle = styled(m.img)({
  zIndex: 5,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  opacity: "0.7",
});

const HeroSection = styled(m.div)(() => ({
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  maxHeight: "1100px",
  position: "fixed",
  overflow: "hidden",
}));

const HeroWrapper = styled(m.div)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  aligItems: "center",
  overflow: "hidden",
  position: "relative",
}));

const HeroSlide = styled("div")(() => ({
  zIndex: "1",
  width: "100%",
  height: "100%",
}));

const HeroSlider = styled("div")(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const HeroImage = styled("img")(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
}));

const SliderButtons = styled("div")(() => ({
  position: "absolute",
  bottom: "50px",
  right: "50px",
  display: "flex",
  zIndex: "10",
}));

const PrevArrow = styled(IoArrowBack)(() => ({
  width: "50px",
  height: "50px",
  color: "#fff",
  cursor: "pointer",
  background: "#000d1a",
  borderRadius: "50px",
  padding: "10px",
  marginRight: "1rem",
  userSelect: "none",
  transition: "0.3s",
  "&:hover": {
    background: "#cd853f",
    transform: "scale(1.05)",
  },
}));

const NextArrow = styled(IoArrowForward)(() => ({
  width: "50px",
  height: "50px",
  color: "#fff",
  cursor: "pointer",
  background: "#000d1a",
  borderRadius: "50px",
  padding: "10px",
  marginRight: "1rem",
  userSelect: "none",
  transition: "0.3s",
  "&:hover": {
    background: "#cd853f",
    transform: "scale(1.05)",
  },
}));

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 2000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);

    // console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };

  return (
    <MotionContainer>
      <HeroSection>
        <HeroWrapper>
          <HeroOverlayStyle
            alt="overlay"
            src="https://minimal-assets-api.vercel.app/assets/overlay.svg"
          />
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage
                      src={slide.image}
                      alt={slide.alt}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeAnimation}
                    />
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
      <LandingContent />
      <Satisfaction />
      <Box sx={{ height: "100vh" }} />
    </MotionContainer>
  );
};

export default Hero;
