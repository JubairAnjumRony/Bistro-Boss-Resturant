


import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../pages/hooks/useCart";
import useAdmin from "../pages/hooks/useAdmin";



const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
//   const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">

                    {/* admin panel */}

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :

                            // normal user 
                   
                   <> <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymenthistory">
                            <FaList></FaList>
                            My Payments</NavLink>
                    </li>
                    </>
                  }


                    {/*shared navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;