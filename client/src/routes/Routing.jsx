import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ChatPage from '../pages/ChatPage'
import SignUp from '../pages/SignUp'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/chats' element={<ChatPage />} />
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    )
}

export default Routing
