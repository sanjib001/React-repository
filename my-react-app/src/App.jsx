// import './App.css'
import Header from './components/header'
import Button from './components/button'
import Counter from './components/counter'
import Logo from './components/logo'
import Navbar from './components/navbar'
import Form from './components/form'
import "./index.css"
import Wine from './components/partials/wine'
import Coffee from './components/partials/coffee'

function App() {

  const organization = {
    name: "Tech axis",
    address: "Kumripati"
  }

  const navItems = [
    { url: "/home", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" }
  ]

  return (
    <>
      {/* <Header
        logo={<Logo />}
        navbar={<Navbar navItems={navItems} />}
        organization={organization}
      /> */}
      {/* <Button name="SignUp" />
      <Button name="SignIn" /> */}
      {/* <Button>Sign In</Button>
      <Button>Sign Up</Button> */}
      {/* <Counter />
      <Form /> */}
      <main>
        {/* <Wine /> */}
        <Coffee/>
      </main>

    </>
  )
}

export default App
