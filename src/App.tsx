import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Admin from "./Containers/Admin/Admin";
import NewDish from "./Containers/NewDish/NewDish";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new-dish" element={<NewDish />} />
      </Routes>
    </div>
  );
};

export default App;
