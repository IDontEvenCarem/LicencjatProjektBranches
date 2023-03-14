import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Content from './Content'
import SideAdds from './SideAdds'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <SideAdds side='left'></SideAdds>
      <SideAdds side='right'></SideAdds>
    </div>
  )
}

export default App
