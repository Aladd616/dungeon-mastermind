import React, { useEffect, useState } from 'react'
import { Input, } from "@chakra-ui/react"
import ChatNames from './ChatNames'
import axios from 'axios'


function ContactList(currentUser) {
    const [chats,setChat] =useState([])
    const user = currentUser

    // useEffect(() => {
    //     const getChats = async() =>{
    //         const res = await axios.get('/')
    //     }
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

   console.log(user)
    return (<>
        <Input placeholder="search friends" claseName = "findFriends"/>
        <ChatNames/>
        <ChatNames/>
        <ChatNames/>
        
    </>
    )
}

export default ContactList
