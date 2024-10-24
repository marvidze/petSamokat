import { Categories } from "./categories";
import { ShoppingArea } from "./shopping-area/shopping-area";
import { ShoppingCart } from "./shoppingСart";

export function Body() {
  return (
    <div className="w-full flex ">
      <Categories />
      <ShoppingArea />
      <ShoppingCart />
    </div>
  );
}
