export default function PrimaryButton({ children, action }) {
  return (
    <button
      type="submit"
      className="text-sm w-full items-center justify-center text-center font-dmSansMedium text-white bg-[#6791C9] rounded-[10px] py-[13px]"
      onClick={action}
    >
      {children}
    </button>
  );
}
