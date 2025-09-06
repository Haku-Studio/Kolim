export default function FormInput({...props}){
    return(
        <div className="space-y-[6px]">
            <label 
                htmlFor={props.inputId}
                className="text-sm font-dmSansMedium block"
            >
                {props.inputLabel}
                {props.required && <span>*</span>}
            </label>
            <input 
                type={props.inputType} 
                id={props.inputId}
                placeholder={props.inputPlaceholder}
                className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full text-greyScale500 text-sm"
                required = {props.required}
            />
        </div>
    )
}