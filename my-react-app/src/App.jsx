// import './App.css'
import "./index.css"
import Header from "./components/layouts/header"
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
    <Header/>
      {/* <Button name="SignUp" />
      <Button name="SignIn" /> */}
      {/* <Button>Sign In</Button>
      <Button>Sign Up</Button> */}
      {/* <Counter />
      <Form /> */}
      <main>
        <Wine />
        {/* <Coffee/> */}
      </main>

    </>
  )
}

export default App
