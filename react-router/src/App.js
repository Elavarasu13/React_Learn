import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import { BrowserRouter , Routes, Route ,Link } from 'react-router-dom';
import OldBook from './components/OldBook';
import NewBook from './components/NewBook';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <ul> 
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/user/1'>User 1</Link></li>
        <li><Link to='/user/2'>User 2</Link></li>
        <li><Link to='/books/oldbooks'>Old Books</Link></li>
        <li><Link to='/books/newbooks'>New Books</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
       <Routes>
         <Route path='/' element={<Home/>}  />
         <Route path='/about' element={<About/>}  />
         <Route path='/contact' element={<Contact/>}  />
         <Route path='/user/:id' element={<User/>}  />
         <Route path='/books'>
           <Route path='oldbooks' element={<OldBook/>}/>
           <Route path='newbooks' element={<NewBook/>}/>
         </Route>
         <Route path='/login' element={<Login/>} />
         <Route path='/dashboard' element={<Dashboard/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
