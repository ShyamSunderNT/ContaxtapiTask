import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Card = () => {
  const { productDetails, updateQuantity, removeProduct } =
    useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const calculateSubtotal = () => {
    return productDetails.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const calculateShipping = () => {
    const hasShipping = productDetails.some(
      (product) => product.shipping !== "Free"
    );
    return hasShipping ? 50 : "Free";
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    return shipping === "Free" ? subtotal : subtotal + shipping;
  };

  return (
    <div className="container-fluid bg-light">
      {productDetails.map((product) => (
        <div
          key={product.id}
          className="product d-flex justify-content-between me-5"
        >
          <div className="product-left">
            <div className="container">
              <div className="card mb-3" style={{ width: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.thumbnail}
                      className="img-fluid rounded-start"
                      alt="product-image"
                      style={{ width: "350px", height: "250px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-start fs-5">
                        {product.title}
                      </h5>
                      <p className="card-text text-start fs-5">
                        <small className="text-muted">{product.brand}</small>
                      </p>
                      <p className="card-text text-start fs-5">
                        {product.description}
                      </p>
                      <p className="card-text text-start fs-5">
                        <small className="text-muted">{product.category}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-right d-flex flex-column justify-content-between">
            <div className="qty-price d-flex mt-5 justify-content-between ">
              <select
                value={product.quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
              >
                {[...Array(product.stock).keys()].map((index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <p className="mt-1 fw-bold">
                {" "}
                ${product.price * product.quantity}
              </p>
            </div>
            <a
              href="#"
              className="btn delete mb-5 fw-bold text-danger "
              onClick={() => handleRemoveProduct(product.id)}
            >
              REMOVE
            </a>
          </div>
        </div>
      ))}

      <hr />
      <div className="container-fluid fw-bold">
        <div className="subtotal d-flex justify-content-between">
          <p className="text-muted">SUBTOTAL:</p>
          <p> ${calculateSubtotal()}</p>
        </div>
        <div className="shipping d-flex justify-content-between">
          <p className="text-muted">SHIPPING:</p>
          <p>
            {calculateShipping() === "Free"
              ? "Free"
              : `$${calculateShipping()}`}
          </p>
        </div>
        <hr />
        <div className="total d-flex justify-content-between">
          <p>TOTAL:</p>
          <p> ${calculateTotal()}</p>
        </div>
        <div className="offer d-flex justify-content-end">
          <p className="text-danger">Get Daily Cash with Nespota Card</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
