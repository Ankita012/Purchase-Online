import './App.css';
import HeaderComponent from './containers/HeaderComponent';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
