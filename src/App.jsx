import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Netflix from './pages/Netflix'
import Login from './pages/login'
import Signup from './pages/signup'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked'
import ErrorBoundary from './pages/ErrorBoundary'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/Login' element={<Login />}/>
      <Route exact path='/Signup'element={<Signup />}/>
      <Route exact path='/player' element={<Player/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/txseries' element={<TVShows/>}/>
      <Route exact path='/mylist' element={
      <ErrorBoundary> <UserLiked/></ErrorBoundary>
      
      
      }/>
      <Route exact path='/' element={<Netflix />}/>
      </Routes>
      </BrowserRouter>
  )
}
