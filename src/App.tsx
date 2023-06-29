import { useState } from 'react'

import './App.css'
import StoreProvider from './context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'


function App() {

  return (
    <StoreProvider>
    


    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>


</StoreProvider>
  )
}

export default App
