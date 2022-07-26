import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import MainNavbar from './components/navbar';
import HomePage from './components/home';
import { AuthProvider } from "./context/authProvider";
import Login from "./components/login";
import Protected from './components/Protected';


function App() {
  return (
    <>
   <AuthProvider>
    <BrowserRouter>
    <MainNavbar/>
    <Routes>
      <Route path='' element={ <Login/>} exact></Route>
      <Route path='home' element={ <Protected Component={HomePage} /> }></Route>
      <Route path='mk' element={"ok done"}></Route>
    
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
