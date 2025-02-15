import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ChatPage = () => {

    const[chats,setChats] = useState([]);
    
    const fetchChats = async () => {
        const url = "http://localhost:3000/api/chat";
        const {data} = await axios.get(url)
        // console.log(data);
        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat)=>(
                <p key={chat._id}>{chat.chatName}</p>
            ))}
        </div>
    )
}

export default ChatPage
