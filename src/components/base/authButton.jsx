import { useRouter } from "@tanstack/react-router"

export default function AuthButton({children, ...props}){

    const router = useRouter()
    const goToApp = () => {
        router.navigate({to: '/'})
    }

    return(
        <button 
            className="flex items-center justify-center space-x-2 py-[13px] border border-solid border-greyScale50 bg-greyScale0 w-full rounded-[10px]"
            onClick={goToApp}
        >
            <span className="text-sm text-greyScale400">{props.name}</span>
            {children}
        </button>
    )
}