import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Agent_Page from "../components/customer_for_approvement_page/AddCustomerForApprovement";

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
