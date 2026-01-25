import "./index.css"
import HomePage from "./pages/homepage"
import WinePage from "./pages/winepage"
import CoffeePage from "./pages/coffeepage"
import ErrorPage from "./pages/errorpage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WineDetailPage from "./pages/wineDetailpage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path="/wine/:id" element={<WineDetailPage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
