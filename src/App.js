import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar title="Shopkart" />
        <Routes>
          <Route path="/" element={<Home/>} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
