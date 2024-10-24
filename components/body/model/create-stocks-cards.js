import { UiStockCard } from "../../UI/ui-stock-card";

export function createStockCards(src, name, img) {
  return <UiStockCard src={src} name={name} img={img} />;
}
