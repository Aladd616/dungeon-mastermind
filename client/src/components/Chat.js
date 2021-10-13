import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
  } from "@chakra-ui/react"
  import ContactList from './ContactList'
import GroupList from './GroupList'
import Messages from './messages'

function Chat() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Chat
        </Button>
        
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Tabs>
  <TabList>
    <Tab>Chat</Tab>
    <Tab>Contacts</Tab>
  </TabList>
  

  <TabPanels>
    <TabPanel>
      <ContactList/>
    </TabPanel>
    <TabPanel>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
    </TabPanel>
  </TabPanels>
</Tabs>
            <Button colorScheme="blue">Send</Button>
            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
               Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default Chat
