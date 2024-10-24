import { UiButton } from "../UI/ui-button";
import { ArrowDownIcon } from "./icons/arron-down-icon";
import { DeliverIcon } from "./icons/deliver-icon";

export function ShoppingCart() {
  return (
    <div className="fixed bg-white right-0 mx-5 mt-5 rounded-[30px] w-[430px] min-h-[650px] max-h-[800px] p-4">
      <button className="flex text-gray-600 text-[18pt] font-bold w-full">
        <div className="flex ml-5 mr-2">Щербакова, 87</div>
        <ArrowDownIcon className="text-gray-500 my-auto h-4 w-4" />
      </button>
      <div className="text-[19pt] font-bold text-gray-400 ml-5">30 минут</div>
      <div className="mb-[200px] mt-[150px]">
        <DeliverIcon className="flex mx-auto h-[200px] w-[180px]" />
        <div className="text-center text-[14pt] font-bold text-gray-400 mx-20">
          <p>Соберите корзину,</p>
          <p>а мы её быстро привезём</p>
        </div>
      </div>
      <div className="flex">
        <UiButton
          className="flex mx-auto m-1 w-full text-center"
          text="Заказ от 700 ₽"
        />
      </div>
    </div>
  );
}
