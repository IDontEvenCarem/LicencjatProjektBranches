import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Content from './Content'
import SideAdds from './SideAdds'
import Footer from './Footer'
import Shell from './Shell'
import FloatingElements from './FloatingElements'

function App() {
  return (
    <>
      <FloatingElements></FloatingElements>
      <Shell>
        <Content></Content>
      </Shell>
    </>
  )
}

export default App
