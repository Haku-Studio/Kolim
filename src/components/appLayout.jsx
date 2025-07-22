import AppHeader from "./partials/appHeader";

export default function AppLayout({children}){
    return (
        <div className="font-dmSansRegular max-w-md w-full">
            <AppHeader />
            {children}
        </div>
    )
}