import React, { useState } from "react";
import { Link } from "react-router-dom";

function SupplierLogin() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
       
        console.log("Logging in with ID:", id, "and password:", password);
    };

    return (
        <div className="supplier-login-container">
            <h2>Supplier Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="supplierID">ID:</label>
                    <input 
                        type="text" 
                        id="supplierID" 
                        name="supplierID" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="supplierPassword">Password:</label>
                    <input 
                        type="password" 
                        id="supplierPassword" 
                        name="supplierPassword" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default SupplierLogin;