export function UiButton({ className, text }) {
  return (
    <div className={className}>
      <button className="flex bg-[#ff859f] rounded-[30px] m-4 w-full h-auto p-4">
        <div className="flex mx-auto text-xl font-bold text-white">{text}</div>
      </button>
    </div>
  );
}
