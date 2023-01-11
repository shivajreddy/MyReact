import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Store} from "./pages/Store";
import {Navbar} from "./components/Navbar";

function App() {

  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/store" element={<Store/>}>Store</Route>
        <Route path="/about" element={<About/>}>About</Route>
      </Routes>

    </div>
  )
}

export default App
