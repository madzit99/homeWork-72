import Cart from "../../Components/Cart/Cart";
import Dishes from "../../Components/Dishes/Dishes";
import Toolbar from "../../Components/Toolbar/Toolbar";

const Home = () => {
  return (
    <>
      <Toolbar />
      <div className="container w-75 mt-3">
        <div className="row">
          <div className="col-9">
            <Dishes />
          </div>
          <div className="col-3">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
