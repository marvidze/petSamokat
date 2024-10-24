import { UiCategory } from "../UI/ui-categories";
import { categories } from "./model/categories-list";
import { createCategories } from "./model/create-categories";

export function Categories() {
  return (
    <div className="break-normal min-h-[650px] max-h-[800px] max-w-[400px] fixed w-[15%] bg-white mt-5 mx-5 rounded-[30px] items-center overflow-auto no-scrollbar scroll-smooth">
      <UiCategory
        src="https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-cover--preview.jpg"
        name="Рецепты"
        className="flex rounded-md items-center my-5 w-full"
      />
      <div className="mx-auto w-[90%] border-y-[1px]"></div>
      {categories.map((item) => {
        return createCategories(item.src, item.name);
      })}
    </div>
  );
}
