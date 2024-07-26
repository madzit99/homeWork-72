import React from "react";
import { NavLink } from "react-router-dom";

const AdminToolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid w-75">
        <NavLink to="/admin" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/800px-Dodo_Logo.svg.png"
            style={{ width: "100px" }}
            alt=""
          />
        </NavLink>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">
              Все блюда
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/orders" className="nav-link">
              Заказы
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Вернуться к версии для клиента
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminToolbar;
