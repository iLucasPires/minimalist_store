import { Button } from "../atom/Button";
import { Input } from "../atom/Input";
import { Card } from "./Card";
import { useState } from "react";

interface ProductsProps {
  products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }[];
}

export const ListProducts = ({ products }: ProductsProps) => {
  const [input, setInput] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <section className="flex flex-col items-center gap-5 bg-stone-100 p-10 text-white">
      <h1 className="text-3xl font-bold text-stone-800">Products</h1>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex w-full gap-2">
          <Input input={input} setInput={setInput} />
          <Button
            onClick={(e) => {
              e.preventDefault();
              setInput("");
            }}
            text="Search Product"
            color="dark"
          />
        </div>
        <ul className="justify- grid grid-cols-3 gap-5">
          {!filteredProducts.length ? (
            <div className="flex h-[80vh] w-screen flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-stone-800">
                Product not found
              </h1>
              <p className="text-stone-800">Try again</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Card product={product} key={product.id} />
            ))
          )}
        </ul>
      </div>
    </section>
  );
};
