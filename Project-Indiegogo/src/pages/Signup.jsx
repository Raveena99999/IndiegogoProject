import React, { useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { AuthSlideContext } from "../context/AuthContextProvider";
export default function Signup() {
  const { isOpen, onOpen, onClose, initialRef, finalRef } =
    useContext(AuthSlideContext);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
          <BreadcrumbLink
            onClick={onOpen}
            _hover={{ color: "#E51075", textDecoration: "none" }}
            mr="12px"
          >
            Sign Up
          </BreadcrumbLink>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent h="800px">
              <ModalHeader fontSize="36px" textAlign="center">
                Welcome!
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  fontSize="16px"
                  color="gray"
                  textAlign="center"
                  mt="-15px"
                >
                  Sign up to join Indiegogo.
                </Text>

                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input ref={initialRef} placeholder="Your First Name" />
                </FormControl>

                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input ref={initialRef} placeholder="Your Last Name" />
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input ref={initialRef} placeholder="Your Email" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Password" />
                </FormControl>

                <Checkbox
                  size="lg"
                  colorScheme="red"
                  borderColor="gray.200"
                  mt="15px"
                >
                  Sign me up for the Indiegogo newsletter
                </Checkbox>

                <Checkbox
                  size="lg"
                  colorScheme="red"
                  borderColor="gray.200"
                  mt="10px"
                >
                  I agree to the{" "}
                  <Link
                    color="#E51075"
                    textDecoration="underline"
                    href="https://www.indiegogo.com/about/terms"
                  >
                    Terms of Use
                  </Link>{" "}
                  and have read and understand the
                  <Link
                    color="#E51075"
                    textDecoration="underline"
                    href="https://www.indiegogo.com/about/privacy"
                  >
                    Privacy Policy
                  </Link>
                </Checkbox>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="pink" mr={3} w="100%">
                  LOG IN
                </Button>
              </ModalFooter>
              <Text textAlign="center">OR</Text>
              <ModalFooter>
                <Button colorScheme="facebook" mr={3} w="100%">
                  CONTINUE WITH FACEBOOK
                </Button>
              </ModalFooter>
              <ModalFooter>
                <Text fontSize="14px" mb="-10px" color="gray" mr="80px">
                  No posts without your permission.
                </Text>
              </ModalFooter>

              <ModalFooter>
                <Box
                  display="flex"
                  width="250px"
                  height="50px"
                  alignItems="center"
                  m="auto"
                  mt="0px"
                >
                  <Text fontSize="17px" textAlign="center" color="">
                    Already have an account?{" "}
                    <Link
                      href="https://www.indiegogo.com/"
                      fontWeight="bold"
                      fontSize="15px"
                      _hover={{ color: "#E51075" }}
                      textDecoration="underline"
                    >
                      Log In
                    </Link>
                  </Text>
                </Box>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
