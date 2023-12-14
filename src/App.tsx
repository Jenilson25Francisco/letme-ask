import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NewRoom } from "./pages/room/index"
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rooms/new" Component={NewRoom} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
