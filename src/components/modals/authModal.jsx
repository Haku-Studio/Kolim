import AuthButton from "../base/authButton";
import CloseButton from "../base/closeButton";

export default function AuthModal() {
//   const handleGoogleRedirect = () => {
//        window.location.href = process.env.BACKEND_API_URL + "/auth/google";
//   };

  return (
    <div className="pt-[72px] bg-white rounded-t-[20px] absolute bottom-0 z-100">
      <CloseButton />
      <div className="space-y-6 px-4 pb-[200px] pt-4">
        <h2 className="text-xxl text-greyScale800 font-dmSansSemibold">
          Connecter vous pour continuer
        </h2>
        <div className="space-y-3">
          <AuthButton name="Continuer avec Google" type="google auth">
            <svg
              className="vector"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 6.54544V9.64363H12.8054C12.6164 10.64 12.049 11.4837 11.1981 12.0509L13.7945 14.0655C15.3072 12.6692 16.18 10.6182 16.18 8.18188C16.18 7.61462 16.1291 7.06912 16.0345 6.54553L8.5 6.54544Z"
                fill="#4285F4"
              />
              <path
                d="M4.01649 9.52267L3.43092 9.97093L1.35815 11.5854C2.67451 14.1963 5.3725 16 8.49974 16C10.6597 16 12.4706 15.2873 13.7942 14.0655L11.1979 12.0509C10.4852 12.5309 9.57606 12.8218 8.49974 12.8218C6.41976 12.8218 4.65254 11.4182 4.01976 9.52729L4.01649 9.52267Z"
                fill="#34A853"
              />
              <path
                d="M1.35812 4.41455C0.812695 5.49087 0.5 6.70543 0.5 7.99996C0.5 9.29448 0.812695 10.509 1.35812 11.5854C1.35812 11.5926 4.01998 9.51991 4.01998 9.51991C3.85998 9.03991 3.76541 8.53085 3.76541 7.99987C3.76541 7.46889 3.85998 6.95984 4.01998 6.47984L1.35812 4.41455Z"
                fill="#FBBC05"
              />
              <path
                d="M8.49991 3.18545C9.67811 3.18545 10.7254 3.59271 11.5617 4.37818L13.8526 2.0873C12.4635 0.792777 10.6599 0 8.49991 0C5.37266 0 2.67451 1.79636 1.35815 4.41455L4.01994 6.48001C4.65263 4.58908 6.41992 3.18545 8.49991 3.18545Z"
                fill="#EA4335"
              />
            </svg>
          </AuthButton>
          <AuthButton name="Continuer avec Facebook" type="facebook auth">
            <svg
              class="social-icons"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_208_776)">
                <path
                  d="M16.5 8C16.5 3.58176 12.9182 0 8.5 0C4.08176 0 0.5 3.58176 0.5 8C0.5 11.7517 3.08304 14.8998 6.56752 15.7645V10.4448H4.91792V8H6.56752V6.94656C6.56752 4.22368 7.79984 2.9616 10.4731 2.9616C10.98 2.9616 11.8546 3.06112 12.2123 3.16032V5.37632C12.0235 5.35648 11.6955 5.34656 11.2882 5.34656C9.97648 5.34656 9.4696 5.84352 9.4696 7.13536V8H12.0827L11.6338 10.4448H9.4696V15.9414C13.4309 15.463 16.5003 12.0902 16.5003 8H16.5Z"
                  fill="#0866FF"
                />
                <path
                  d="M11.6333 10.4448L12.0823 7.99999H9.46916V7.13535C9.46916 5.84351 9.97604 5.34655 11.2877 5.34655C11.6951 5.34655 12.0231 5.35647 12.2119 5.37631V3.16031C11.8541 3.06079 10.9796 2.96159 10.4727 2.96159C7.7994 2.96159 6.56708 4.22367 6.56708 6.94655V7.99999H4.91748V10.4448H6.56708V15.7645C7.18596 15.9181 7.83332 16 8.49956 16C8.82756 16 9.15108 15.9798 9.46884 15.9414V10.4448H11.633H11.6333Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_208_776">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </AuthButton>
        </div>
        <p className="text-xs text-greyScale500">
          La sécurisation de vos informations personnelles est notre priorité.
          Consultez nos mesures de confidentialité.
        </p>
      </div>
    </div>
  );
}
