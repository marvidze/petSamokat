import { createStockCards } from "../model/create-stocks-cards";
import { stocksList } from "../model/stocks-list";

export function StocksArea({ className }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-6 gap-4 h-[230px] p-2">
        {stocksList.map((item) => {
          return createStockCards(item.src, item.name, item.img);
        })}
      </div>
    </div>
  );
}
