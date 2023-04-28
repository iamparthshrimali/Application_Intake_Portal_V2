import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  });

  const { Component } = props;

  return <Component />;
};

export default ProtectedRoute;
