import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Books from "./pages/Books/Books";
import { AddBooks } from "./pages/Books/AddBooks";
import BooksManagement from "./pages/Books/BookManagement";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <><Router>
      <NavBar />{" "}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/books" element={<Books/>}/>
        <Route  path="/addbooks" element={<AddBooks onClose={() => {}} initialBookData={{}} />}/>
        <Route  path="/managebooks" element={<BooksManagement/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
      </Routes>

    </Router><div className="App">

      </div></>
  );
}

export default App;
