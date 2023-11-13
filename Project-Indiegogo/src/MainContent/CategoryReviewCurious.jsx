import React from 'react'
import {
    Box,
    Flex,
    Spacer,
    Image,
    Link,
    Text,
    Container,
    Button,
  } from "@chakra-ui/react";
import Signup from '../pages/Signup';
export default function CategoryReviewCurious({}) {
  return (
    <div>
<Text fontSize="34px" textAlign="center" mt="35px">Which categories interest you?</Text>
<Text fontSize="18px" textAlign="center" mt="15px">Discover projects just for you and get great recommendations when you select your interests.
</Text>
<Button _hover={{bg:"white", borderColor:"gray"}} mt="15px" fontSize="14px"  bg="white" border="1px" borderColor="gray.200" display="block" mx="auto" >SIGN UP AND SELECT INTEREST</Button>
<Text mt="12px" fontSize="18px" textAlign="center">Or explore our top categories
</Text>


<Flex mx="auto" w="92%" gap="40px" mt="5px">
  <Box p='4'  w="300px" h="120px" _hover={{bg:"gray.200"}}>
<Image h="60px" mx="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe_rK-sFAheFrfgqZw1-1udAbPuby6U4U3g&usqp=CAU"/>
<Text textAlign="center" fontSize="12px" mt="8px">HOME</Text>
  </Box>

  <Box p='4'  w="300px" h="120px" _hover={{bg:"gray.200"}}>
    <Image h="60px" mx="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CmqA5YpjIAT6BQ8cLPcVmEwyg0FJy05BLQ&usqp=CAU"/>
    <Text textAlign="center" fontSize="12px" mt="8px" >PHONES & ACCESSORIES</Text>
</Box>

  <Box p='4'  w="300px" h="120px" _hover={{bg:"gray.200"}}>
    <Image h="90px" mx="auto" mt="-10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeP3-Mr54tydp4Bf__Rzdk6Z403NMHPvz6w&usqp=CAU"/>
    <Text textAlign="center" fontSize="12px" mt="-10px" >TRAVEL & OUTDOORS</Text>

  </Box>

  <Box p='4'  w="300px" h="120px" _hover={{bg:"gray.200"}}>
    <Image h="50px" mx="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnp6Dcx-fohZm9tJD_WbtT4dyjJ5Uw_4ArFA&usqp=CAU"/>
    <Text textAlign="center" fontSize="12px" mt="15px" >HEALTH & FITNESS</Text>

  </Box>

  <Box p='4'  w="300px" h="120px" _hover={{bg:"gray.200"}}>
    <Image h="60px" mx="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkG9Ga5cQ0PIEURedHHIBPDIFHqOD5BcyCg&usqp=CAU"/>
    <Text textAlign="center" fontSize="12px" mt="5px" >AUDIO</Text>

  </Box>

  <Box p='4'  w="300px" h="120px" _hover={{bg:"gray.200"}}>
   <Image h="50px" mx="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bMimmCiy6J0nkTUja9DWTPj1Wcr4gzD-PQ&usqp=CAU"/>
   <Text textAlign="center" fontSize="12px" mt="15px" >FILM</Text>

  </Box>

</Flex>


<Text fontSize="34px" textAlign="center" mt="35px">From the Indiegogo Review</Text>
<Text fontSize="18px" textAlign="center" mt="15px">Your behind-the-scenes view of the people and stories behind Indiegogo projects
</Text>

<Flex mx="auto" w="92%"  mt="50px">
  <Box p='4'
//    border="1px"
    w="420px" h="250px">
  <Image w="100%" h="100%" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1698949706/mn1lljslimy4bdpxpul9.png"/>
  <Text mt="20px">Indiegogo's New Gifting Feature</Text>
  <Text mt="8px" color="#6A6A6A">Now you can give the gift of crowdfunding.</Text>
<Link fontSize="14px" mt="16px" display="block" _hover={{color:"#E51075",textDecoration:"none"}} href="https://go.indiegogo.com/blog/2023/10/indiegogo-redefines-crowdfunding-support-with-new-gifting-feature.html?utm_source=banner&utm_medium=wordpress&utm_campaign=from-the-journal&r=ban-wor-from-the">LEARN MORE ></Link>
  </Box>

  <Box p='4' 
//   border="1px"
   w="420px" h="250px">
  <Image w="100%" h="100%" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1698949396/b6ytq9ga3t0plplvxem0.png"/>
  <Text mt="20px">We Review the Most High End Gaming Handheld</Text>
  <Text mt="8px" color="#6A6A6A">Does the AYANEO KUN live up to the hype?
</Text>
<Link fontSize="14px" mt="16px" display="block" _hover={{color:"#E51075",textDecoration:"none"}} href="https://go.indiegogo.com/blog/2023/11/the-art-of-gaming-ayaneo-kun-delivers-the-best-visual-experience-for-gamers.html?utm_source=banner&utm_medium=wordpress&utm_campaign=from-the-journal&r=ban-wor-from-the">LEARN MORE ></Link>
  </Box>
  
  <Box p='4' 
//   border="1px"
   w="420px" h="250px">
    <Image w="100%" h="100%" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1698949291/s3soqvhp3dykhh1gtism.png"/>
    <Text mt="20px">We Tried the Best Android Gaming Handheld
</Text>
  <Text mt="8px" color="#6A6A6A">Putting the new AYANEO Pocket Air to the test!

</Text>
<Link fontSize="14px" mt="16px" display="block" _hover={{color:"#E51075",textDecoration:"none"}} href="https://go.indiegogo.com/blog/2023/10/ayaneo-pocket-air-retro-edition-a-nostalgic-gamers-dream-come-to-life.html">LEARN MORE ></Link>
  
  </Box>
  
  
</Flex>


<Text fontSize="34px" textAlign="center" mt="145px">Clever Things For Curious Humans™</Text>
<Text fontSize="18px" textAlign="center" mt="15px" w="1000px" mx="auto">There’s no better place to start the hunt for something new and special. Begin on Indiegogo to find clever and unconventional things that solve everyday problems large and small.

</Text>
<Box
        // border="2px"
        w="290px"
        m="auto"
        mt="20px"
      >
        <Button fontSize="14px" color="white" bg="#E51075" borderRadius="2px" _hover={{bg:"#E51075"}}>
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
          LEARN NOW
        </Button>
      </Box>


    </div>
  )
}

