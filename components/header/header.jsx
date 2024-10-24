import { UiLogo } from "../UI/ui-logo";
import { UiProfileButton } from "../UI/ui-profile-button";
import { UiSearch } from "../UI/ui-search";

export function Header() {
  return (
    <div className="max-w-[1920px] flex mx-[20px] px-2 py-4 bg-white rounded-b-[30px]">
      <div>
        <UiLogo />
      </div>
      <div className="w-full">
        <UiSearch className="ml-20 w-[94%] h-14 items-center flex rounded-[80px] bg-gray-100" />
      </div>
      <div className="w-[30%] mx-6">
        <UiProfileButton className="px-auto w-[100%] h-14 items-center flex rounded-[80px] bg-gray-100 font-bold text-gray-600" />
      </div>
    </div>
  );
}
