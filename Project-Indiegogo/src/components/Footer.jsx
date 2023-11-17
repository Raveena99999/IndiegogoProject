import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
 
} from "@chakra-ui/react";

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <div>
      <Box
        border="1px"
        borderColor="white"
        h="660px"
        mt={10}
        bg="rgb(245,245,245)"
       
      >
        <Box h="400px" mt={71} display="flex" 
         flexWrap="wrap">
          <Box
            h="350px"
            w="60%"
            mt={2}
            display="flex"
            justifyContent="space-around"

          >
            <Box
            // w="23%" mb={4}
            w={{ base: "90%", sm: "45%", md: "30%", lg: "23%" }} 
            mb={4}
            px={{ base: 2, md: 4 }} 
            >
              <Text color="#6A6A6A"
              //  fontSize="18px"
               fontSize={{ base: "16px", md: "18px" }}
              >
                EXPLORE
              </Text>
              <Box mt={2}>
                <Link>What We Do</Link> <br />
                <Link>Funding</Link> <br />
              </Box>
            </Box>

            <Box
            //  w="23%" mb={4}
            w={{ base: "90%", sm: "45%", md: "30%", lg: "23%" }} 
            mb={4}
            px={{ base: 2, md: 4 }} 
             >
              <Text color="#6A6A6A"
              //  fontSize="18px"
               fontSize={{ base: "16px", md: "18px" }}
               >
                ABOUT
              </Text>
              <Box mt={2}>
                <Link>About Us</Link> <br />
                <Link>Blog</Link> <br />
                <Link>Trust & Safety</Link> <br />
                <Link>Help & Support</Link> <br />
                <Link>Press</Link> <br />
                <Link>Careers</Link> <br />
                <Link>Contact</Link> <br />
              </Box>
            </Box>

            <Box
            // w="23%" mb={4}
            w={{ base: "90%", sm: "45%", md: "30%", lg: "23%" }} 
            mb={4}
            px={{ base: 2, md: 4 }} 
            >
              <Text color="#6A6A6A"
              //  fontSize="18px"
              fontSize={{ base: "16px", md: "18px" }}
               >
                ENTREPRENEURS
              </Text>
              <Box mt={2}>
                <Link>How It Works</Link> <br />
                <Link>Indiegogo vs. Kickstarter</Link> <br />
                <Link>Education Center</Link> <br />
                <Link>Experts Directory</Link> <br />
                <Link>Fees</Link> <br />
                <Link>Enterprise</Link> <br />
                <Link>China</Link> <br />
              </Box>
            </Box>
          </Box>

         
 <Box
      h="350px"
      w={{ base: "100%", md: "23%" }}
      mt={{ base: 7, md: 0 }}
      ml={{ base: 0, md: 170 }}
      px={{ base: 2, md: 4 }}
      textAlign="center"

    >
      <img
        style={{ height: "50px", display: "block", margin: "auto" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmkHZBtXtsKrp8I3Bk1FaXIY4NPLXjKRvig&usqp=CAU"
        alt=""
      />
      <Heading as="h4" size="md" textAlign="center">
        Find it first on Indiegogo
      </Heading>

      <Text textAlign="center" mt={2}>
        Discover new and clever products in the Indiegogo newsletter
      </Text>
      <Container>
        <Input
          borderRadius="0"
          mt={8}
          h="50px"
          borderColor="gray.200"
          size="md"
          type="email"
          name=""
          id="emailInput"
          placeholder="Your Email Address"
        />
        <br />
        <input
          style={{ textAlign: "center", marginTop: "15px" }}
          type="checkbox"
          name=""
          id="checkbox"
        />{" "}
        I agree to the{" "}
        <Link href="https://www.indiegogo.com/about/terms">
          <a
            style={{ textDecoration: "underline", color: "#E51075" }}
          >
            Terms of Use
          </a>
        </Link>{" "}
        and have read and understand the{" "}
        <Link href="https://www.indiegogo.com/about/privacy">
          <a
            style={{ textDecoration: "underline", color: "#E51075" }}
          >
            Privacy Policy
          </a>{" "}
        </Link>
        <br />
      </Container>
      <button
        style={{
          backgroundColor: "#E51075",
          color: "white",
          width: "100%",
          height: "40px",
          marginTop: "15px",
        }}
      >
        Sign Me Up
      </button>
    </Box>
    </Box>






        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="450px"
          h="70px"
          ml={10}
        //            display="flex"
        // alignItems="center"
        // justifyContent="space-between"
        // w={{ base: "100%", md: "450px" }}
        // h="70px"
        // mt={{ base: 4, md: 400,lg:50 }}
        // flexWrap={{ base: "wrap", md: "nowrap" }}
        // ml={{lg:20}}
        >
         

          <Box>
          <Button  border="1px"
              borderColor="gray"
              fontSize="12px"
              w="200px"
              borderRadius="0px" onClick={onOpen}> Rs.Indian Rupee (INR)</Button>
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay  />
        <ModalContent  >
          <ModalHeader>Currency Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Changing the currency will allow you to view estimates of the campaign goal and contribution amounts in the currency you choose.</Text>
            <br />
<Text>You will still be charged in the campaign’s original currency. The amount charged by your card issuer in your local currency may differ from our estimate, based on their exchange rate and any applicable fees.</Text>            
<Select placeholder='Rs.Indian Rupee (INR)' w="220px" mt="20px">
  <option value='option1'>$ Hong Kong Dollar(HKD)</option>
  <option value='option2'>UAE Dirham(AED)</option>
  <option value='option3'>$Austrailian Dollar(AUD)</option>
  <option value='option3'>$Canadian Dollar(CAD)</option>
  <option value='option3'>Rs.Indian Rupee(INR)</option>
  <option value='option3'>DO Not Convert Currency</option>


</Select>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme='' mr={3} color="#E51075" border="1px" borderColor="gray" w="120px" borderRadius="2px">
            Cancel
            </Button>
            <Button  _hover={{ bg: "#E51075" }} bg="#E51075" color="white" border="1px"  w="120px" borderRadius="2px" >Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
         
            w="190px"
        //      display="flex"
        // alignItems="center"
        // justifyContent="space-between"
        // w={{ base: "100%", md: "450px" }}
        // h="70px"
        // ml={10}
        // mt={{ base: 4, md: -1,lg:1 }}
        // flexWrap={{ base: "wrap", md: "nowrap" }}
          >
             <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="200px"
          // w={{ base: "100%", md: "190px" }}
          // mt={{ base: 4, md: 0 }}
        >
            <a href="https://www.facebook.com/Indiegogo">
              <img
                src="https://img.icons8.com/?size=24&id=118491&format=png"
                alt=""
              />
            </a>
            <a href="https://twitter.com/indiegogo">
              <img
                src="https://img.icons8.com/?size=24&id=102916&format=png"
                alt=""
              />
            </a>
            <a href="https://www.youtube.com/indiegogo">
              <img
                src="https://img.icons8.com/?size=24&id=85162&format=png"
                alt=""
              />
            </a>
            <a href="https://instagram.com/indiegogo">
              <img
                src="https://img.icons8.com/?size=24&id=85154&format=png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/company/indiegogo">
              <img
                src="https://img.icons8.com/?size=30&id=98960&format=png"
                alt=""
              />
            </a>
            <a href="https://open.spotify.com/show/7bEdWFbpv3rKHotpDzcCV4?si=6a5cee9902214695&nd=1">
              <img
                src="https://img.icons8.com/?size=30&id=99983&format=png"
                alt=""
              />
            </a>
            </Box>
          </Box>
        </Box>
        <hr
          style={{
            border: "1px solid lightgray",
            margin: "auto",
            marginTop: "20px",
            width: "95%",
          }}
        />

        <Box
        
          w="950px"
          mt="20px"
          display="flex"
          justifyContent="space-between"
          mx="auto"
        //     w={{ base: "100%", md: "950px" }}
        // mt="20px"
        // display="flex"
        // justifyContent="space-between"
        // mx="auto"
        // flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Link fontSize="13px" href="https://www.indiegogo.com/about/terms">
            {" "}
            Terms of use
          </Link>
          <Link fontSize="13px" href="https://www.indiegogo.com/about/privacy">
            Privacy Policy
          </Link>
          <Link fontSize="13px" href="https://www.indiegogo.com/">
            Cookie Policy
          </Link>
          <Link fontSize="13px" href="https://www.indiegogo.com/">
            Do Not Sell My Personal Information
          </Link>
          <Link
            fontSize="13px"
            href="https://www.indiegogo.com/about/accessibility"
          >
            Accessibility
          </Link>
          <Text fontSize="13px">@ 2023 Indiegogo.Inc.All Rights Reserved</Text>
        </Box>
      </Box>
      //{" "}
    </div>
  );
}
