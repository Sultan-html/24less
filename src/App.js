import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Category from './pages/Category/Category';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/reducer';
import { useEffect } from 'react';
import './style.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [dispatch]);
  return (
    <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/category/:category' element={<Category />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
