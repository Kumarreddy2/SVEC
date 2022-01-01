import React from 'react'

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import ListRendering from './ListRendering'
//  import ListRendering from './ListRendering'
// import FormRendering from './FormRendering'
export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main/>}></Route>
                <Route path='/login' element={<ListRendering/>}></Route>
                </Routes> 
            </BrowserRouter>
        </div>
    )
}

function Main() {
    return(
        <>
        <h1>:: Home page ::</h1>
        <Link to="/login">Login</Link>
        </>
    )
}