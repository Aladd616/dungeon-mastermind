import React, { useEffect, useState } from 'react'
import { Input,FormControl,Button } from "@chakra-ui/react"
import ChatNames from './ChatNames'
import axios from 'axios'


function ContactList(currentUser) {
    const [chats,setChats] =useState([])
    const [friendName,setFriendName] = useState()
    const [friendInfo,setFriendInfo] = useState()
    const [newChatID,setNewChatID] = useState()
    const user = currentUser.currentUser 
    

    useEffect(() => {
        const getChats = async () => {
          try {
            const res = await axios.get("/api/members/" + user.user_id);
            setChats(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getChats();
      }, [user.user_id]);

      const getFriend = async event =>{
          event.preventDefault();
          try {
              const res = await axios.get("/api/users/name/"+friendName)
                setFriendInfo(res.data)
                console.log(friendInfo)
                newChat()
          } catch (err) {
              console.log(err)
          }

      };

      const newChat = async () =>{
        try {
            const res = await axios.post("/api/chat/")
              setNewChatID(res.data)
        } catch (err) {
            console.log(err)
        }
    };
    const postChatMembers = async () =>{
        try {
            const res = await axios.post("/api/members/" ,
            
            [ {
                      user_id: user.user_id,
                chat_id: newChatID
            },
            {
                user_id:friendInfo.user_id,
                chat_id:newChatID}
            ]
            
            
            )
            console.log(res.data)
        } catch (err) {
            console.log(err)
            
        }
    }

    return (<>
        <form onSubmit={getFriend}>
        <FormControl isRequired>
            <Input type="name" placeholder="search friends" claseName = "findFriends"
             onChange={event => setFriendName(event.currentTarget.value)} />
        </FormControl>
        <Button type= "submit">Find Friend</Button>
        </form>
        <ChatNames/>
        <ChatNames/>
        <ChatNames/>
    </>
    )
}

export default ContactList
