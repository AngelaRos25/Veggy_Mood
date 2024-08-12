import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

// stile
import "./App.css";

// componenti
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <ScrollToTop />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
