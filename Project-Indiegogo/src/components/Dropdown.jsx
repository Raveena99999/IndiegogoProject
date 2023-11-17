import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  Heading,
  VStack 
} from "@chakra-ui/react";

export default function Dropdown({firstName,handleLogout}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();




  return (
    <>
     
     <Heading _hover={{color:"#E51075"}} as="h4" size="md" onClick={onOpen} > {firstName } </Heading>
      <Drawer 
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
       
      >
        <DrawerOverlay />
        <DrawerContent  style={{ height: "40vh" ,width:"30vh"}}  mt="65px">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="start"> {/* Use VStack for vertical stacking */}
              <Link>My Campaigns</Link>
              <Link>My Contribution</Link>
              <Link>Profile</Link>
              <Link>Settings</Link>
              <Link onClick={handleLogout}>Log Out</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
