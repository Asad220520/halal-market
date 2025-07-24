import Promotion from "./Promotion";
import Categories from "./Categorie";
import Product from "./Product";

const Home = () => {
  return (
    <div className="sm:py-8  py-4 pb-[100px]">
      <Promotion />
      <Categories />
      <Product />
    </div>
  );
};

export default Home;
