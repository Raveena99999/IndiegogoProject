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
        <Box h="400px" mt={71} display="flex">
          <Box
            h="350px"
            w="60%"
            mt={2}
            display="flex"
            justifyContent="space-around"
          >
            <Box>
              <Text color="#6A6A6A" fontSize="18px">
                EXPLORE
              </Text>
              <Box mt={2}>
                <Link>What We Do</Link> <br />
                <Link>Funding</Link> <br />
              </Box>
            </Box>

            <Box>
              <Text color="#6A6A6A" fontSize="18px">
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

            <Box>
              <Text color="#6A6A6A" fontSize="18px">
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

          <Box h="350px" w="23%" mt={7} ml={170}>
            <img
              style={{ height: "50px", display: "block", margin: "auto" }}
              src="data:image/jpeg;base64,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"
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
              <Link>
                <a
                  href="https://www.indiegogo.com/about/terms"
                  style={{ textDecoration: "underline", color: "#E51075" }}
                >
                  Terms of Use
                </a>
              </Link>{" "}
              and have read and understand the{" "}
              <Link>
                <a
                  href="https://www.indiegogo.com/about/privacy"
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
            // border="1px"
            // borderColor="red"
            w="190px"
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
        <hr
          style={{
            border: "1px solid lightgray",
            margin: "auto",
            marginTop: "20px",
            width: "95%",
          }}
        />

        <Box
          // border="1px"
          // borderColor="red"
          w="950px"
          mt="20px"
          display="flex"
          justifyContent="space-between"
          // mt="20px"
          mx="auto"
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
