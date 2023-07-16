import './App.css';
import CardList from './Card/CardList';
import Navbar from './components/Navbar';
import {Routes,Route}  from 'react-router-dom';
import Cart from './MyCart/Cart';
function App() {
  return (
    <div className="App">
 <Navbar/>
   <Routes>
 
    <Route path='/' element={<CardList/>}></Route>
      
       <Route path='/cart' element={<Cart/>}/>
       
  </Routes>
       
     
     
     
    </div>
  );
}

export default App;
