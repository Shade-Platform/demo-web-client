import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './pages/Form'
import Success from './pages/Success'
import { useState } from 'react'

function App() {

  const [createdContainer, setCreatedContainer] = useState(undefined)
  // console.log(createdContainer.CreationDate)
  return (
    <main className="flex flex-col min-h-screen bg-gray-700">
      <Header />
      <div className="flex items-center flex-grow justify-content:center">
        {createdContainer === undefined? <Form setContainer={(container) => setCreatedContainer(container)}/> : <Success {...createdContainer}/> }
      </div>
      <Footer />
    </main>
  )
}

export default App
