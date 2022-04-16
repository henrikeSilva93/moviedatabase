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
import ActorDetails from "./pages/actorDetails";
import Series from "./pages/series";

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
        <Route path="/actorDetails/:id" element={<ActorDetails/>} />
        <Route path="/series" element={<Series/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
