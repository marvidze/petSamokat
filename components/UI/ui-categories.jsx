export function UiCategory({ src, name, className }) {
  return (
    <div className="break-normal text-[11pt] flex items-center font-bold text-gray-500 hover:text-gray-600 hover:brightness-90 ">
      <button className={className}>
        <img
          src={src}
          className="relative object-bottom object-cover rounded-[6px] h-[32px] w-[32px] mx-4 "
        />
        {name}
      </button>
    </div>
  );
}
