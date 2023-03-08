import React from 'react'
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./Layout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import theme from './theme'
  
function Navbar() { 
  const { isOpen, onOpen, onClose } = useDisclosure();
  return ( 

    <> 
     <ChakraProvider theme={theme}>
       <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
       </Layout>
     </ChakraProvider>
    </> 

  )
}

  

export default Navbar