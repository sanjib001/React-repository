import './App.css'
import Header from './components/header'
import Button from './components/button'

function App() {
  return (
    <div>
      <Header />
      {/* <Button name="SignUp" />
      <Button name="SignIn" /> */}
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </div>
  )
}

export default App
