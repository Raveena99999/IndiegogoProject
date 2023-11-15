import React, { useContext, useEffect, useState } from "react";
import { AuthSlideContext } from "../context/AuthContextProvider";
import { Heading, Text, Button, Box ,Link} from "@chakra-ui/react";
import Signup from "../pages/Signup";

export default function Slider() {
  const { slide, setSlide, images } = useContext(AuthSlideContext);


  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slide, images.length]);

  const goToNextSlide = () => {
    setSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div position="relative">
      <img
        style={{ width: "100%", height: "470px" }}
        src={images[slide]}
        alt={`Slide ${slide + 1}`}
      />
      <div>
        <button onClick={goToPreviousSlide}>{"<"}</button>
        <button onClick={goToNextSlide}>{">"}</button>
      </div>

      <Text fontSize="36px" textAlign="center" >Find it first on Indiegogo.</Text>

      <Text mt="8px" textAlign="center" fontSize="18px" >
        Indiegogo is where early adopters and innovation seekers find lively,
        imaginative tech before it hits the mainstream.
      </Text>
      <Box
        // border="2px"
        w="290px"
        m="auto"
        mt="20px"
      >
 <Button  fontSize="14px" color="white" bg="#E51075" borderRadius="2px" _hover={{bg:"#E51075"}}>
          SIGN UP NOW
           
        </Button>
        <Button
          fontSize="14px"
          color="#E51075"
          bg="white"
          borderRadius="2px"
          border="1px"
          borderColor="gray.200"
          ml="20px"
          _hover={{bg:"#E51075" ,bg:"white", borderColor:"gray"}}
        >
          <a href="https://www.indiegogo.com/about/what-we-do"> LEARN NOW</a>
         
        </Button>
      </Box>
    </div>
  );
}
