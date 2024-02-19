import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ProductCards from "./components/ProductCards";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  let product = [
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "False",
     
      actualPrice: " $40.00 - $80.00 ",
      reviews: "False",
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "True",
      salePrice: "$18.00  ",
      actualPrice: " $20.00 ",
      reviews: "True",
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "True",
      salePrice: "$25.00  ",
      actualPrice: " $50.00 ",
      reviews: "False",
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "False",
      actualPrice: " $40.00 ",
      reviews: "True",
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "True",
      salePrice: "$25.00  ",
      actualPrice: " $50.00 ",
      actualcost: "",
      reviews: "False",
    },
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "False",
     
      actualPrice: " $120.00 - $280.00 ",
      reviews: "False",
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "True",
      salePrice: "$18.00  ",
      actualPrice: " $20.00",
      reviews: "True",
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "False",
     
      actualPrice: " $40.00",
      reviews: "True",
    },
  ];

  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <NavBar basket={cartCount} />
      <Header />

      <div >
      <ProductCards
        product={product}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      </div>
      <Footer />
    </div>
  );
};

export default App;
