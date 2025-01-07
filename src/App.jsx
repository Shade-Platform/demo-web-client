import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './pages/Form'

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mt-10">
        <Form />
      </div>
      <Footer />
    </main>
  )
}

export default App
