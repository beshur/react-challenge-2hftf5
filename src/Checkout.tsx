import { Link } from "react-router-dom";
import "./styles.css";

export default function Shop() {
  return (
    <div className="App">
      <h1>Checkout</h1>

      <div>Cart data</div>

      <div>
        <button>Checkout button</button>
      </div>
      <Link to="/">Index</Link>
    </div>
  );
}
