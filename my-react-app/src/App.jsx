// import './App.css'
import Header from './components/header'
import Button from './components/button'
import Counter from './components/counter'
import Input from './components/input'
import Logo from './components/logo'
import Navbar from './components/navbar'

function App() {

  const organization = {
    name: "Tech axis",
    address: "Kumripati"
  }

  return (
    <>
      <Header
        logo={<Logo />}
        navbar={<Navbar />}
        organization={organization} />
      {/* <Button name="SignUp" />
      <Button name="SignIn" /> */}
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <Counter />
      <Input />
    </>
  )
}

export default App
