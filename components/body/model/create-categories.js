import { UiCategory } from "../../UI/ui-categories";

export function createCategories(src, name) {
  return (
    <UiCategory
      src={src}
      name={name}
      className="flex rounded-md items-center my-2 w-full"
    />
  );
}
