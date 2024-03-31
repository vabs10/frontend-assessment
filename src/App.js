import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./pages";
import { Population, Crypto, Wallet } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}>
            <Route path={"/population"} element={<Population />}></Route>
            <Route path={"/crypto"} element={<Crypto />}></Route>
            <Route path={"/wallet"} element={<Wallet />}></Route>
            <Route index element={<Navigate to="/population" />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
