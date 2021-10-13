import React from 'react'
import { Input, } from "@chakra-ui/react"
import ChatNames from './ChatNames'

function ContactList() {
    return (<>
        <Input placeholder="search friends" claseName = "findFriends"/>
        <ChatNames/>
        <ChatNames/>
        <ChatNames/>
    </>
    )
}

export default ContactList
