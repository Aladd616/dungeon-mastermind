import React,{useState} from 'react'
import Axios  from 'axios'
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
import Messages from './messages'

function Chat() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [user,setUser]=useState("")

  
    const getUser = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "/auth/user",
      }).then((res) => {
        setUser(res.data);
        console.log ('is it working')
      });
    };

    function runfunctions(){
        onOpen();
        getUser();

    }

    return (
        <>
        <Button ref={btnRef} colorScheme="teal" onClick={runfunctions}>
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
      <ContactList currentUser = {user} />
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
