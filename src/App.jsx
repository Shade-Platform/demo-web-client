import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './pages/Form'

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-700">
      {/* <Header /> */}
      <div className="flex items-center flex-grow justify-content:center">
        <Form />
      </div>
      <Footer />
    </main>
  )
}

export default App
