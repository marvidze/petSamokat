import { ProfileIcon } from "./icons/profile-icon";

export function UiProfileButton({ className }) {
  return (
    <button className={className}>
      <div className="flex mx-auto">
        <ProfileIcon />
        Профиль
      </div>
    </button>
  );
}
