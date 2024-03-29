import logo from './logo.svg';
import './App.css';
import OrderList from './pages/orders/page';
import Navbar from './components/Navbar/Navbar';
// import VerticalMenu from './components/layout/Navbar/VerticalMenu';
// import configureFakeBackend from './common/fake-backend.js';

import './assets/css/style.css';

// configureFakeBackend();

const App = () => {
  return (
    <div>
      <Navbar />
      <OrderList/>
    </div>
  );
}

export default App;
