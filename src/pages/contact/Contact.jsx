import React from "react";
import "./contact.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Contact = ({ openCart }) => {
  const location = useLocation();
  const selectedPackage = location.state?.package;

  return (
    <div>
       <Navbar openCart={openCart} />
      {selectedPackage && <p>Selected Package: {selectedPackage}</p>}
      <form action="">
        <h1>Hello</h1>
      </form>
    </div>
  );
};

export default Contact;