import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import './App.css';
import SalesPage from './pages/SalesPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/ventas" element={<SalesPage />} />
          <Route path="/producto/:id" element={<ProductItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
