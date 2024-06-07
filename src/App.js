import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import Viewall from './components/Viewall';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<AddBook/>}/>
      <Route path='/Search' element={<SearchBook/>}/>
      <Route path='/delete' element={<DeleteBook/>}/>
      <Route path='/Viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
