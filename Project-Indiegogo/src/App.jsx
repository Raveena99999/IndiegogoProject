import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./MainContent/Slider";
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./components/AllRoutes";
import Images from "./MainContent/Images";
import CategoryReviewCurious from "./MainContent/CategoryReviewCurious";
import Practice from "./components/Practice";
import UserCards from "./MainContent/UserCards";

function App() {
  return (
    <>
            {/* <Practice/> */}
        <Navbar />

        <Slider />
        <UserCards/>

        <Images/>
        <CategoryReviewCurious/>
        <Footer />
        
       {/* <AllRoutes/> */}
      
      
    </>
  );
}

export default App;
