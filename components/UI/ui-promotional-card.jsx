export function UiPromotionalCard({ src, name, img }) {
  return (
    <div className="flex">
      <div className="flex">
        <a src="http//localhost:3000" className="relative">
          <div className="absolute top-0 left-0 w-[200px] h-[80px] bg-gradient-to-b from-[#2e2e2ec1] rounded-t-[30px]">
            <span className="absolute text-white top-4 left-2 text-[13pt] font-bold">
              {name}
            </span>
          </div>
          <img src={img} className="h-[300px] w-[200px] rounded-[30px]" />
        </a>
      </div>
    </div>
  );
}
