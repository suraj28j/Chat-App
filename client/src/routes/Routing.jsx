import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ChatPage from '../pages/ChatPage'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/chats' element={<ChatPage />} />
        </Routes>
    )
}

export default Routing
