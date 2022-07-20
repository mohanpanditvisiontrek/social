import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import MainNavbar from './components/navbar';


function App() {
  return (
    <>
    <BrowserRouter>
    <MainNavbar />
   
    <Routes>
      <Route path='/' element={"hello"}></Route>
      <Route path='mk' element={"ok done"}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
