import Pages from "./pages/Pages"
import "./App.css"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
