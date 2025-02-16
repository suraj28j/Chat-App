import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../HomePage/Login'
import SignUp from '../HomePage/SignUp'
import ChatPage from '../HomePage/ChatPage'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chats' element={<ChatPage />} />
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    )
}

export default Routing
