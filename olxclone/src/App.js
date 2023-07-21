import logo from './logo.svg';
import './App.css';
import Bottom from './Component/Bottom';
import Cart from './Component/cart';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AllRoutes from "./Route/AllRoutes"
function App() {
  return (
    <div>
      <Navbar/>
    <Bottom/>
    <AllRoutes/>
    <Cart/>
    <Footer/>
    </div>
  );
}

export default App;
