import './App.css'
import Header from './components/header'
import Button from './components/button'
import Counter from './components/counter'
import Input from './components/input'

function App() {
  return (
    <>
      <Header />
      {/* <Button name="SignUp" />
      <Button name="SignIn" /> */}
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <Counter/>
      <Input/>
    </>
  )
}

export default App
