import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
import { AllContext } from "../../contexts/AllContextProvider";

const Dashboard = () => {
  const {userFromDB, loading} = useContext(AllContext);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  const adminOptions = (
    <React.Fragment>
      <li className="mb-4">
        <NavLink to="/dashboard/allbuyers">All Buyers</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/allsellers">All Sellers</NavLink>
      </li>
    </React.Fragment>
  );
  const sellerOptions = (
    <React.Fragment>
      <li className="mb-4">
        <NavLink to="/dashboard/addaproduct">Add a product</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/myproducts">My Products</NavLink>
      </li>
    </React.Fragment>
  );
  const buyerOptions = (
    <React.Fragment>
      <li className="mb-4">
        <NavLink to="/dashboard/myorders">My Orders</NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-start">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button my-10 lg:hidden"
          >
            Dashboard Menu
          </label>
          <h2 className="text-2xl font-bold text-center mb-7">
            Welcome To your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {loading? <Loading/>:userFromDB?.role === 'Admin'? adminOptions: userFromDB?.role === 'Seller' ? sellerOptions: buyerOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
