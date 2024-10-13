import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get("http://localhost:3002/auth", {
          withCredentials: true, // Send cookies to the server
        });
        if (data.isAuthenticated) {
          setAuth(true); // User is authenticated
        } else {
          setAuth(false); // User is not authenticated
        }
      } catch (error) {
        setAuth(false); // In case of error, user is not authenticated
      }
    };
    checkAuth();
  }, []);

  if (auth === null) {
    return <div>Loading...</div>; // While waiting for the authentication check
  }

  return auth ? (window.location.href = "http://localhost:1574/") : children; // Redirect to login if not authenticated
};

export default ProtectedRoute;
