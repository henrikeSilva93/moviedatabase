import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import NavbarMenu from "./components/Navbar";
import Details from "./pages/details";
import Lancamentos from "./pages/lancamentos";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavbarMenu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="detalhes/:id" element={<Details/>} />
        <Route path="lancamentos" element={<Lancamentos/>} />
        <Route path="lancamentos/detalhes/:id" element={<Details/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
