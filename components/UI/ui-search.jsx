import { SearchIcon } from "./icons/search-icon";

export function UiSearch({ className }) {
  return (
    <div className={className}>
      <SearchIcon className="flex h-5 w-5 mx-4" />
      <div className="w-full">
        <input
          type="text"
          id="mainSearch"
          className="text-gray-600 bg-gray-100 w-[99%] outline-none caret-pink-600 font-bold placeholder-gray-400"
          placeholder="Искать в самокате..."
        />
      </div>
    </div>
  );
}
