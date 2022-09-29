interface ProductsProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

export const Card = ({ product }: ProductsProps) => {
  return (
    <li className="flex flex-col items-center gap-5 ">
      <a href="">
        <img
          className=" h-96 w-96 object-cover transition-all duration-500 hover:object-right-bottom"
          src={product.image}
          alt={product.title}
        />
      </a>
      <div className="flex flex-col items-center text-center text-black">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="text-gray-500">{`R$ ${product.price}`}</p>
      </div>
    </li>
  );
};
