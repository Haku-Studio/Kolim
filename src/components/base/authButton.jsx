import { authService } from "../../api/services/authSevice";
// import { useAppStore } from "../../store/useAppStore";

export default function AuthButton({ children, ...props }) {
  return (
    <button
      className="flex items-center justify-center space-x-2 py-[13px] border border-solid border-greyScale50 bg-greyScale0 w-full rounded-[10px]"
      onClick={() => {
        authService.startGoogleLogin();
        // closeAuthModal();
      }}
    >
      <span className="text-sm text-greyScale400">{props.name}</span>
      {children}
    </button>
  );
}
