

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Image
} from "@chakra-ui/react";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Explore from "../pages/Explore";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const handleClick =()=>{
    window.location.href="/"
  }
  let newObj=localStorage.getItem("myobject")
  let finalObj=JSON.parse(newObj)
  // console.log(newObj,"navbar")
 console.log("firstname",finalObj.firstName)

  const openDropdown = () => {
    if (dropdownRef && dropdownRef.current) {
      dropdownRef.current.onOpen();
    }
  };
  const dropdownRef = React.useRef();




  return (
    <Box 
      h="65px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px"

      borderColor="gray.200"
      flexDirection={{ base: "column", md: "row" }} 
      mb={{ base: "3", sm: "4", md: "6" ,lg:"0" }}
    >
      <Box
        ml={5}
        h="65px"
        w="600px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"

       
      >
        <Breadcrumb spacing="8px" separator=""       
>
          <BreadcrumbItem isCurrentPage onClick={handleClick}>
            <BreadcrumbLink href="/">
              <Image 
                style={{ height: "25px" }}
                src="data:image/png;base64,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"
                alt=""
              />
            </BreadcrumbLink>
          </BreadcrumbItem>

          
          <Explore/>

          <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
            <BreadcrumbLink
              href="/ourTop10Finds"
              _hover={{ color: "#E51075", textDecoration: "none" }}
            >
              {" "}
              Our Top 10 Finds
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <Link to="/ourTop10Finds">our top 10finds</Link> */}
          <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
            <BreadcrumbLink
              href="/teamFavourites"
              _hover={{ color: "#E51075", textDecoration: "none" }}
            >
              Team Favourites
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href=""
              _hover={{ color: "#E51075", textDecoration: "none" }}
            >
              <img
                style={{ height: "50px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX///8hJikAAAAeIyYVGx/j4+QAAAYNFRkABw0bISQiJyj8/P1JTU0AAAPX19gSGRy0t7hER0nv8PFzdXacnp719vaChYbp6emtra4ADRLLzc6QkpK7vb0wMzR9f4BQU1U3OjxdYWNoa2sl9QWsAAACZUlEQVRoge2Y3ZaqMAyFSQqUUqUgKBZQxPd/yElH1/lx6JyLMaxzkW/u2llrk90mTUwSQRAEQRAEQRAEQRAEQRBi2Gw4j2M3ZcdtdftupzH32uP+cq3oOzbSPV6xMPDEOJyrjYRrdADK4SeaPsFgu0nQI5KuL9u6yvpqGpuctHVz4Bc+5SR06X4p2WkuANyNXbqjiPO2/3PJds6AnpkNnyg+HJOX2zwpBfnIKny4GeVPX9cHBIUDp3KXQ7pb3UBIF8tn+LFU4LPVrZ0BZExrOmW94nWA/NZXPuXWga4ipfKiFGNmlcbs1l8Im5w0eDa7j985SidR1FzKGZZFF9usPMQ3f8qAJUbD6slttmJSYbk/f6fMFjO5HQ9r4HTbUqFqY5s13bCJSzm5GdPE+i7Kdbde3t4B5WweeResU7Fcfwd0lm5Z3zrvw9XmezIaA8Vq0JZeaEazbTIhGFjztNWgbqwt6KIhnb8uhx4JjB4ZO++spJZreX2TRk/tKEDpG84n2ivqcf9K3IyMUGlovCF1Hd8lO5O00ffhedo2Gw01/kU73HQYOYqFK2y6ZXlK/TVerl1dn087pC9RBXUqx7Z4hB0t7T+mb5AkVOpzLFwQ8+bh/lT6EDYu1I4zdYNTQ/OUegx0KZrn2dow6oXVFDu+Sz6cZggDnWva6fjU/VwvdUl+7Ge+qpLYQ1bRTPdaVg7XMOGBM+etZurfTJeQ3crfGcOO0LdFOG0NfJc8yhRSHFS+bPsjiqW/w0KFvFwfwbipU61c/+//ezsU9j3eIbMqU04N2+eVIAiCIAiCIAiCIAiCIPzvfAA67htnKF4m8wAAAABJRU5ErkJggg=="
                alt=""
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <Box
        h="65px"
        w="420px"
        display="flex"
        alignItems="center"
        justifyContent="space-around"

      >
        <Breadcrumb separator=""   >
          <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
            <BreadcrumbLink
              href="/startaCompaign"
              target="_blank"
              _hover={{ color: "#E51075", textDecoration: "none" }}
            >
              Start a Compaign
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
            <BreadcrumbLink
              href="/whatweDo"
              target="_blank"
              _hover={{ color: "#E51075", textDecoration: "none" }}
            >
              What We Do
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <Login/> */}

          {finalObj.firstName ? ( 
            <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
              <h1>{}</h1>
            </BreadcrumbItem>
          ) : (
           
            <Login />
          )}



          {finalObj.firstName ? ( 
          
            <Dropdown ref={dropdownRef} firstName={finalObj.firstName} />

          ) : (
           
            <Signup />
          )}

          {/* <Signup/> */}
        </Breadcrumb>


       
      
       
      </Box>

     
    </Box>
  );
}