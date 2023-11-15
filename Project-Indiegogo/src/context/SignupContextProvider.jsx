import React, { createContext, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const SignupContext = createContext();

export default function SignupContextProvider({children}) {
    
  const { isOpenSignup, onOpenSignup, onCloseSignup } = useDisclosure();
  const initialRefSignup = React.useRef(null);
  const finalRefSignup = React.useRef(null);
  return (
    <SignupContext.Provider value={{isOpenSignup, onOpenSignup, onCloseSignup, initialRefSignup,finalRefSignup }}>
        {children}
    </SignupContext.Provider>
  )
}

