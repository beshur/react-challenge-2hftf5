import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React 18 template</h1>
      <h2>With TypeScript and React Router Dom</h2>

      <div className="nav-horizontal">
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}
