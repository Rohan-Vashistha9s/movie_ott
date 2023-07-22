import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className='App'>
    <Router>
     <Header/>
      <Routes>
        <Route index element ={<Home/>}></Route>
        <Route path='movie/:id' element={<h1>Movie Page Detail</h1>}></Route>
        <Route path='movie/:type' element={<h1>Movie list page</h1>}></Route>
        <Route path='/*' element={<h1>Error Page</h1>}></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
