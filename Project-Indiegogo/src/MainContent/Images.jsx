import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Image,
  Link,
  Text,
  Container,
} from "@chakra-ui/react";

export default function Images() {
  return (
    <div>
      <Flex w="90%" mx="auto"  mt="20px">
        <Box position="relative" p="4"
        //  border="1px" 
         h="420px" w="700px">
          <Image
            w="100%"
            h="100%"
            src="https://media.istockphoto.com/id/1359675618/photo/young-man-sitting-on-a-gray-sofa-caresses-the-head-of-a-brown-tabby-cat.webp?b=1&s=170667a&w=0&k=20&c=SLPzt0_K6B5PAL3pHJ-HqXkC6b1yO1bKK0od7n5m_38="
          />
 <Flex>
  <Box p='2' ml="-12px" fontWeight="bold" fontSize="15px" mt="0px" h="5px" >
   <Text>Our roundup of standup projects</Text>
    
  </Box>
  <Spacer />
  <Box p="2" fontWeight="bold"  fontSize="14px" mt="0px" h="5px">
    <Link mt="-10px" href="https://www.indiegogo.com/campaign_collections/top-10?i=hmcl">SEE THE COLLECTION ></Link>
  </Box>
</Flex>



          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              href="https://www.indiegogo.com/campaign_collections/top-10?i=hmcl"
              _hover={{ textDecoration: "none" }}
            >
              10 Cool & Clever Friends
            </Link>
          </Box>
        </Box>

      


        {/* <Spacer /> */}
       



        <Box position="relative" p="4"
        //  border="1px" 
         h="420px" w="700px">
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdGFyaW5lcnxlbnwwfHwwfHx8MA%3D%3D"
          />

<Flex>
  <Box p='2' ml="-12px" fontWeight="bold" fontSize="15px" mt="0px" h="5px" >
   <Text>Innodigym P1 & more team favourites</Text>
    
  </Box>
  <Spacer />
  <Box p="2" fontWeight="bold"  fontSize="14px" mt="0px" h="5px">
    <Link mt="-10px" href="https://www.indiegogo.com/campaign_collections/top-10?i=hmcl">SEE THE COLLECTION ></Link>
  </Box>
</Flex>



          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              href="https://www.indiegogo.com/campaign_collections/staff-picks?i=hmcl"
              _hover={{ textDecoration: "none" }}
            >
              Team Favourites
            </Link>
          </Box>
        </Box>
      </Flex>







      <Flex w="90%" mx="auto"  mt="35px">
        <Box position="relative" p="4"
        //  border="1px"
          h="420px" w="700px">
          <Image src="https://www.shutterstock.com/image-photo/black-drip-electric-coffee-machine-600nw-2111869688.jpg" />
          <Flex>
  <Box p='2' ml="-12px" fontWeight="bold" fontSize="15px" mt="0px" h="5px" >
   <Text>Campaign for the foodie,craft beer afficionado,or coffee lover.</Text>
    
  </Box>
  <Spacer />
  <Box p="2" fontWeight="bold"  fontSize="14px" mt="0px" h="5px">
    <Link mt="-10px" href="https://www.indiegogo.com/campaign_collections/top-10?i=hmcl">SEE THE COLLECTION ></Link>
  </Box>
</Flex>
          
          
          
          
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              href="https://www.indiegogo.com/campaign_collections/food-drink/?i=hmcl"
              _hover={{ textDecoration: "none" }}
            >
              Food & Drink
            </Link>
          </Box>
        </Box>

        {/* <Spacer /> */}
        <Box position="relative" p="4" 
        // border="1px"
         h="420px" w="700px">
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYXxlbnwwfHwwfHx8MA%3D%3D"
          />
<Flex>
  <Box p='2' ml="-12px" fontWeight="bold" fontSize="15px" mt="0px" h="5px" >
   <Text>Discover campaigns in a whole new way.Follow what matters to you.</Text>
    
  </Box>
  <Spacer />
  <Box p="2" fontWeight="bold"  fontSize="14px" mt="0px" h="5px">
    <Link mt="-10px" href="https://www.indiegogo.com/campaign_collections/top-10?i=hmcl">SEE THE COLLECTION ></Link>
  </Box>
</Flex>


          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="35px"
            w="80%"
            _hover={{ textDecoration: "none" }}
          >
            <Link
              href="https://www.indiegogo.com/campaign_collections/?i=hmhd"
              _hover={{ textDecoration: "none" }}
            >
              Other Collections
            </Link>
          </Box>
        </Box>
      </Flex>

      <Flex w="1220px" h="350px" mx="auto" bg="gray.50"
      //  border="1px"
        mt="70px">
        <Box w="300px"
        //  border="1px" borderColor="black"
         >
          <Image
            w="100%"
            h="100%"
            src="data:image/jpeg;base64,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"
          ></Image>
        </Box>
        {/* <Spacer /> */}

        <Box w="800px"
        //  border="1px" borderColor="black" 
         mt="50px">
          <Text fontSize="32px" textAlign="center">
            Back the project, take the ride
          </Text>
          <Container w="900px">
            <Text mt="20px">
              Indiegogo is your destination for clever innovation in tech
              ,design and more,often with special perks and pricing for early
              adopaters.Back a compaign, share your ideas and feedback with the
              project team - and join the risks and rewards of bringing new
              products to life.
            </Text>
          </Container>
          <Link
            display="block"
            textAlign="center"
            mt="25px"
            _hover={{ color: "#E51075", textDecoration: "none" }}
            href="https://www.indiegogo.com/about/what-we-do"
          >
            LEARN ABOUT CROWDFUNDING >
          </Link>
        </Box>
        {/* <Spacer /> */}

        <Box w="300px"
        //  border="1px" borderColor="black"
         >
          <Image
            h="100%"
            w="100%"
            src="data:image/jpeg;base64,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"
          ></Image>
        </Box>
      </Flex>
    </div>
  );
}
