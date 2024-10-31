import { Link } from "react-router-dom";
import "./styles.css";

export default function Favorites() {
  return (
    <div className="App">
      <h1>Favorites</h1>
      <Link to="/">Index</Link>
    </div>
  );
}
