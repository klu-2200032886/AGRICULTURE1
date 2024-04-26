import React, { useState } from "react";
import { Link } from "react-router-dom";
import SupplierLogin from "./SupplierLogin";

function Home(){
    const [showSupplierLogin, setShowSupplierLogin] = useState(false);

    const openSupplierLogin = () => {
        setShowSupplierLogin(true);
    };

    const closeSupplierLogin = () => {
        setShowSupplierLogin(false);
    };

    return(
        <div className="login-container">
            <div className="login-box">
                <h2>Farmer</h2>
                <Link to="/farmer"> 
                    <button>Login</button>
                </Link>
            </div>
            <div className="login-box">
                <h2>Admin</h2>
                <Link to="/admin"> 
                    <button>Login</button>
                </Link>
            </div>
            <div className="login-box">
                <h2>Supplier </h2>
                <button onClick={openSupplierLogin}>Login</button>
            </div>
            {showSupplierLogin && <SupplierLogin />}
        </div>
    );
}

export default Home;