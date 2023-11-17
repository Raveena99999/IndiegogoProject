import React, { useContext, useState } from "react";
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
} from "@chakra-ui/react";
import { LoginContext } from "../context/LoginContextProvider";

 function Login() {
 

  const {  isOpenLogin, onOpenLogin, onCloseLogin,initialRefLogin,finalRefLogin} =
    useContext(LoginContext);
    console.log("hy", onOpenLogin)

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [colr,setColr]=useState("white")
    const handleEmailChange =(e)=>{
   setEmail(e.target.value)
   if(email.includes("@gmail.com")){
     setColr("white")
   }
   else{
    setColr("red")
   }
    }
    const handleLogin=()=>{
 
      if (email==="" || password==""){
        alert('Please fill all fields')
      }
      console.log(email,"email")
    }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
          <BreadcrumbLink
            onClick={onOpenLogin}
            _hover={{ color: "#E51075", textDecoration: "none" }}
            mr="12px"
          >
            Log In
          </BreadcrumbLink>
          <Modal
            initialFocusRef={initialRefLogin}
            finalFocusRef={finalRefLogin}
            isOpen={isOpenLogin}
            onClose={onCloseLogin}
          >
            <ModalOverlay />
            <ModalContent h="600px">
              <ModalHeader fontSize="36px" textAlign="center">
                Welcome back!
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  fontSize="16px"
                  color="gray"
                  textAlign="center"
                  mt="-15px"
                >
                  Log in to continue.
                </Text>
             
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input includes="@gmail.com" type="email" onChange={handleEmailChange} name="email" ref={initialRefLogin} placeholder="Your Email" />
                  {colr === "red" || (
    <h2 style={{ color: colr }}>Please enter a valid email id</h2>
  )}                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" />
                </FormControl>
                <Link
                  href="https://www.indiegogo.com/accounts/password/new"
                  fontSize="14px"
                  ml="290px"
                  textDecoration="underline"
                  _hover={{ color: "#E51075" }}
                >
                  Forgot Password{" "}
                </Link>
              </ModalBody>

              <ModalFooter>
                <Button onClick={handleLogin} colorScheme="pink" mr={3} w="100%">
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
                  width="210px"
                  height="50px"
                  alignItems="center"
                  m="auto"
                  mt="0px"
                >
                  <Text fontSize="17px" textAlign="center" color="">
                    New to Indiegogo?{" "}
                    <Link
                      href="https://www.indiegogo.com/"
                      fontWeight="bold"
                      fontSize="15px"
                      _hover={{ color: "#E51075" }}
                      textDecoration="underline"
                    >
                      Sign Up
                    </Link>
                  </Text>
                </Box>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
export default Login