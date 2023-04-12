import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
