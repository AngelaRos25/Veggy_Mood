import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

// stile
import "./App.css";

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
