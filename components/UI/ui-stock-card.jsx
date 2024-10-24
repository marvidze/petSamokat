export function UiStockCard({ src, name, img }) {
  return (
    <div className="flex">
      <div className="flex">
        <a src={src} className="relative ">
          <span className="absolute text-gray-700 leading-4 top-4 left-2 text-[12pt] font-bold">
            {name}
          </span>
          <img src={img} className="h-[217px] w-[170px] rounded-[15px]" />
        </a>
      </div>
    </div>
  );
}
