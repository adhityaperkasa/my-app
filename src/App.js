import logo from './logo.svg';
import './App.css';
import CompanyProfile from './components/CompanyProfile';
import HomeComponents from './components/HomeComponents';
import AboutComponents from './components/AboutComponents';
import { MyContext, MyContextProvider } from './context';


import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";

function App() {

  const companyData ={
    name : 'PT Indodev Niaga Internet',
    address : 'Jl tegal rotan',
  };

  return (
  <MyContextProvider> 
  <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponents />}/>
        <Route path="/about" element={<AboutComponents />}/>
        <Route path="/company" element={<CompanyProfile companyData={companyData} />}/>
      </Routes>
    </Router>
    </div>
    </MyContextProvider> 
  );
}

export default App;
