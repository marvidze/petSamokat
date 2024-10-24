import { CategoriesForShoppingArea } from "./categories-for-shopping-area";
import { PromotionalArea } from "./promotional-area";
import { StocksArea } from "./stocks-area";

export function ShoppingArea() {
  return (
    <div className="overflow-auto no-scrollbar scroll-smooth fixed ml-[17%] mt-5 bg-white w-[1124px] w-max-[1124px] h-[800px] max-h-[800px] rounded-[30px] px-4 pt-5 pb-6">
      <PromotionalArea className="my-4" />
      <span className="ml-4 text-[20pt] font-bold text-gray-800">Акции</span>
      <StocksArea className="my-3" />
      <span className="ml-4 text-[20pt] font-bold text-gray-800">
        На любой случай
      </span>
      <CategoriesForShoppingArea className="my-3" />
    </div>
  );
}
