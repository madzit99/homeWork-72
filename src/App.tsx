import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Admin from "./Containers/Admin/Admin";
import NewDish from "./Containers/NewDish/NewDish";
import EditDish from "./Containers/EditDish/EditDish";
import Orders from "./Containers/Orders/Orders";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new-dish" element={<NewDish />} />
        <Route path="/edit-dish/:id" element={<EditDish />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
