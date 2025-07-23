import AppHeader from "./partials/appHeader";

export default function AppLayout({children, onStateChange}){
    return (
        <div className="font-dmSansRegular max-w-md w-full">
            <AppHeader state = {onStateChange}/>
            {children}
        </div>
    )
}