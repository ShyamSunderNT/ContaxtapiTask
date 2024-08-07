import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState([
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        brand: "Apple",
        stock: 94,
        category: "smartphones",
        thumbnail: "https://www.cnet.com/a/img/resize/6e1d5cbd4e3a07363a05a7d3bf7139b07b322a41/hub/2018/09/24/a6a6f9a5-f8ec-4a8c-823b-61f63e94e950/iphone-x-vs-iphone-xs-5005.jpg?auto=webp&fit=crop&height=1200&width=1200",
        images: "https://www.cnet.com/a/img/resize/6e1d5cbd4e3a07363a05a7d3bf7139b07b322a41/hub/2018/09/24/a6a6f9a5-f8ec-4a8c-823b-61f63e94e950/iphone-x-vs-iphone-xs-5005.jpg?auto=webp&fit=crop&height=1200&width=1200",
        quantity: 1,
        shipping: "Free"
      },
      {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        brand: "Apple",
        stock: 34,
        category: "smartphones",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/43/IPhone_X%2C_back_and_front%2C_Silver.png",
        images: [
          "https://i.dummyjson.com/product/products/2/1.jpg",
          "https://i.dummyjson.com/product/products/2/2.jpg",
          "https://i.dummyjson.com/product/products/2/3.jpg",
          "https://i.dummyjson.com/product/products/2/thumbnail.jpg"
        ],
        quantity: 1,
        shipping: "Free"
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        brand: "Samsung",
        stock: 36,
        category: "smartphones",
        thumbnail: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9-plus-ice-blue.jpg",
        images: [
          "https://i.dummyjson.com/product/products/3/1.jpg"
        ],
        quantity: 1,
        shipping: "Free"
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        brand: "OPPO",
        stock: 123,
        category: "smartphones",
        thumbnail: "https://images.jdmagicbox.com/quickquotes/images_main/reno6-pro-5g-ram-12-gb-256-gb-majestic-gold-241164475-fuwxofjj.jpg",
        images: [
          "https://i.dummyjson.com/product/products/4/1.jpg",
          "https://i.dummyjson.com/product/products/4/2.jpg",
          "https://i.dummyjson.com/product/products/4/3.jpg",
          "https://i.dummyjson.com/product/products/4/4.jpg",
          "https://i.dummyjson.com/product/products/4/thumbnail.jpg"
        ],
        quantity: 1,
        shipping: "Free"
      },
      {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        brand: "Huawei",
        stock: 32,
        category: "smartphones",
        thumbnail: "https://images-cdn.ubuy.co.in/633ff647ed8e2e306c7cdcdd-huawei-p30-pro-128gb-8gb-ram-vog-l29.jpg",
        images: [
          "https://i.dummyjson.com/product/products/5/1.jpg",
          "https://i.dummyjson.com/product/products/5/2.jpg",
          "https://i.dummyjson.com/product/products/5/3.jpg"
        ],
        quantity: 1,
        shipping: "Free"
      }
    ]);
 

  const updateQuantity = (productId, newQuantity) => {
    setProductDetails(prevProductDetails =>
      prevProductDetails.map(product =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const removeProduct = (productId) => {
    const newProductList = productDetails.filter(product => product.id !== productId);
    setProductDetails(newProductList);
  };

  return (
    <CartContext.Provider value={{ productDetails, updateQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };