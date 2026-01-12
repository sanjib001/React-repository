import './App.css'
import Header from './components/header'

function App() {
  const name = "Sanjib"
  return (
    <div>
      <Header/>
      <h1>hello world!!!!</h1>
      <h2>This is my first react application</h2>
      <p>My name is {name}</p>
    </div>
  )
}

export default App
