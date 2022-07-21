import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import MainNavbar from './components/navbar';
import LeftBar from './components/home';
import UserState from "./context/userstate";


function App() {
  return (
    <>
      <UserState>
    <BrowserRouter>
    <MainNavbar />
   <LeftBar/>
    <Routes>
      <Route path='/' element={""}></Route>
      <Route path='mk' element={"ok done"}></Route>
    </Routes>
    </BrowserRouter>
    </UserState>
    </>
  );
}

export default App;
