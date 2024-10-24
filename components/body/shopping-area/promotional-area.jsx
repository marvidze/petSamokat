import { promotionList } from "../model/promotion-list";
import { createPromotionalCards } from "../model/create-promotional-cards";

export function PromotionalArea({ className }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-5 gap-4 h-[320px] p-2 ">
        {promotionList.map((item) => {
          return createPromotionalCards(item.src, item.name, item.img);
        })}
      </div>
    </div>
  );
}
