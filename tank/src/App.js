import {Home, Map}from './asset/page'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/map" element={<Map/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
