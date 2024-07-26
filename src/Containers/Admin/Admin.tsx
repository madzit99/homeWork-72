import { NavLink } from "react-router-dom";
import Dishes from "../../Components/Dishes/Dishes";
import AdminToolbar from "../../Components/Toolbar/AdminToolbar";

const Admin = () => {
  return (
    <>
      <AdminToolbar />
      <div className="container w-75">
        <div className="admin-top d-flex align-items-center justify-content-between">
          <h1 className="fs-1 fw-bold">Панель администратора</h1>
          <NavLink to="/new-dish" className=" mt-3 fs-3 btn btn-success ">
            Добавить новое блюдо{" "}
          </NavLink>
        </div>
        <div className="dishes">
          <Dishes isAdmin={true} />
        </div>
      </div>
    </>
  );
};

export default Admin;
