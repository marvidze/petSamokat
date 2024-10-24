import { categoriesForShoppingAreaList } from "../model/categories-list";
import { createStockCards } from "../model/create-stocks-cards";

export function CategoriesForShoppingArea({ className }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-6 gap-4 h-[320px] p-2 ">
        {categoriesForShoppingAreaList.map((item) => {
          return createStockCards(item.src, item.name, item.img);
        })}
      </div>
    </div>
  );
}
