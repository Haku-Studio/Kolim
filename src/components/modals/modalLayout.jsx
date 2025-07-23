import CloseButton from "../base/closeButton";
import PrimaryButton from "../base/primaryButton";

export default function ModalLayout({children, ...props}){
    return(
        <div className=" bg-white rounded-t-[20px] absolute bottom-0 w-full">
            <div className="">
                <div className="relative py-6 border-b-solid border-b-2 border-greyScale0">
                    <CloseButton />
                    {
                        props.modalTitle === "" ? (
                            <div className="h-[25px]" />
                        ) : (
                            <h2 className="text-md text-center text-greyScale800 font-dmSansSemibold">
                                {props.modalTitle}
                            </h2>
                        )
                    }
                </div>
                <div className="py-6 px-4 border-b-2 border-b-solid border-greyScale0">
                    {children}
                </div>
                <div className="p-4">
                    <PrimaryButton action ={props.action}>{props.buttonName}</PrimaryButton>
                </div>
            </div>
        </div>
    )
}