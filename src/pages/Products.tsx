import React from "react";
import { Footer } from "../components/organisms/Footer";
import { ListProducts } from "../components/molecules/ListProducts";

const url = "https://fakestoreapi.com/products";

export const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <ListProducts products={products} />
      <Footer />
    </>
  );
};
