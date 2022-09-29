import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
      <Link to="/" className="text-3xl font-black uppercase">
        minimalist store
      </Link>
    </div>
  );
};
